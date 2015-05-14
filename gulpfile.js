var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var args = require('yargs').argv;
var zip = require('gulp-zip');
var path = require('path');
var _ = require('underscore');
var glob = require('glob');
var exec = require('child_process').exec;

var rm_core = require('rocketmake');
var rm_semver = require('rocketmake-semver');
var rm_nuget = require('rocketmake-nuget');
var rm_logger = require('rocketmake-logger-teamcity');


var structure = rm_core.structure({
    packagePath: 'deployment'
});

var version = {
    semver: '0.0.0-unset',
    dotnetversion: '0.0.0.0'
};

var config = {

    buildType: args.env || 'local',

    outputs: [

        {
            name: 'Armstrong',
            locations: '**/*'
        }
    ],

    nupkgs: function(){
        var apiKey = 'ctdj1COppd7iPafw0RKp';
        var url = 'https://proget.rocketmakers.com/nuget/Default';

        return [
            {
                file: path.join(structure.outputPackagePath, 'Armstrong.' + version.semver + '.nupkg'),
                url: url,
                apiKey: apiKey
            }
        ];
    },

    nuspecs: [
        'Nuspec/Armstrong/Armstrong.nuspec'
    ]

};

gulp.task('getVersion', function(){
    return rm_semver(config.buildType).then(function(v){
        console.log(version = v);
        rm_logger.setVersion(version.semver);
    });
});

gulp.task('cleanWork', function(cb) {
    del([structure.workPath], cb);
});

gulp.task('nugetDownload', rm_nuget.download);

gulp.task('toWork', ['cleanWork'], function() {
    var sourceStream = gulp.src(path.join(structure.sourcePath, '**', '*'), {base: '.'});
    var packageStream = gulp.src(path.join(structure.packagePath, '**', '*'), {base: '.'});

    return merge(sourceStream, packageStream).pipe(gulp.dest(structure.workPath));
});

gulp.task('build', ['toWork'], function(cb){
    exec('sass --scss --force --sourcemap=none armstrong.scss armstrong.css', {
        cwd: structure.workSourcePath
    }, cb);
});

gulp.task('toBuildOut', ['build'], function() {
    var mergedStreams = merge();

    console.log(config.outputs);

    mergedStreams.add(gulp.src(path.join(structure.sourcePath, '**', '*'))
        .pipe(zip('source.zip'))
        .pipe(gulp.dest(structure.outputBuildPath)));

    for(var i in config.outputs){
        mergedStreams
            .add(gulp
                .src(config.outputs[i].locations, {cwd: structure.workSourcePath})
                .pipe(gulp.dest(config.outputs[i].name, {cwd: structure.outputBuildPath})));
    }

    return mergedStreams;
});

var packFn = function(){
    return rm_nuget.pack({
        outputDir: structure.outputPackagePath,
        packagePath: structure.workPackagePath,
        nuspecs: config.nuspecs,
        basePath: structure.workPath,
        version: version
    });
};

gulp.task('pack', ['nugetDownload', 'toBuildOut', 'getVersion'], packFn);

gulp.task('push', ['pack'], function() {
  if (_.contains(['prod', 'test', 'labs', 'demo'], config.buildType)) {
    return rm_nuget.push({ nupkgs: config.nupkgs() });
  }
});

gulp.task('default', ['push']);
