var gulp = require("gulp");
var del = require("del");
var merge = require("merge-stream");
var args = require("yargs").argv;
var zip = require("gulp-zip");
var bump = require("gulp-bump");
var path = require("path");
var _ = require("underscore");
var glob = require("glob");
var exec = require("child_process").exec;
var rm_core = require("rocketmake");
var rm_semver = require("rocketmake-semver");
var rm_nuget = require("rocketmake-nuget");
var rm_logger = require("rocketmake-logger-teamcity");

var structure = rm_core.structure({
    packagePath: "deployment"
});

var npmPublishPath = path.join(structure.outputBuildPath, "Armstrong");
var version = {
    semver: "0.0.0-unset",
    dotnetversion: "0.0.0.0"
};

var config = {
    buildType: args.env || "local",
    outputs: [
        {
            name: "Armstrong",
            locations: "**/*"
        }
    ],
    nupkgs: function(){
        var apiKey = "ctdj1COppd7iPafw0RKp";
        var url = "https://proget.rocketmakers.com/nuget/Default";

        return [
            {
                file: path.join(structure.outputPackagePath, "Armstrong." + version.semver + ".nupkg"),
                url: url,
                apiKey: apiKey
            }
        ];
    },
    nuspecs: [
        "Nuspec/Armstrong/Armstrong.nuspec"
    ]
};

gulp.task("version:get", function(){
    return rm_semver(config.buildType).then(function(v){
        console.log(version = v);
        rm_logger.setVersion(version.semver);
    });
});

gulp.task("work:clean", function(cb) {
    del([structure.workPath], cb);
});

gulp.task("work:copyFiles", ["work:clean"], function() {
    var sourceStream = gulp.src(path.join(structure.sourcePath, "**", "*"), {base: "."});
    var packageStream = gulp.src(path.join(structure.packagePath, "**", "*"), {base: "."});

    return merge(sourceStream, packageStream).pipe(gulp.dest(structure.workPath));
});

gulp.task("build:sass", ["work:copyFiles"], function(cb){
    exec("sass --scss --force --sourcemap=none armstrong.scss armstrong.css", {
        cwd: structure.workSourcePath
    }, cb);
});

gulp.task("build", ["version:get", "build:sass"], function() {
    var mergedStreams = merge();

    console.log(config.outputs);

    mergedStreams.add(gulp.src(path.join(structure.sourcePath, "**", "*"))
        .pipe(zip("source.zip"))
        .pipe(gulp.dest(structure.outputBuildPath)));

    for(var i in config.outputs){
        mergedStreams
            .add(gulp
                .src(config.outputs[i].locations, {cwd: structure.workSourcePath})
                .pipe(gulp.dest(config.outputs[i].name, {cwd: structure.outputBuildPath})));
    }

    return mergedStreams;
});

gulp.task("npm:copy:readme.md", ["build"], function(){
  return gulp.src("readme.md")
    .pipe(gulp.dest(npmPublishPath));
});

gulp.task("npm:copy:package.json", ["build"], function(){
  return gulp.src("package.json")
    .pipe(bump({version: version.semver}))
    .pipe(gulp.dest(npmPublishPath));
});

gulp.task("npm:publish",["npm:copy:package.json", "npm:copy:readme.md"], function(cb){
  exec("npm pack", {cwd: npmPublishPath},cb)
});

gulp.task("nuget:download", rm_nuget.download);

gulp.task("nuget:pack", ["nuget:download", "build"], function(){
    return rm_nuget.pack({
        outputDir: structure.outputPackagePath,
        packagePath: structure.workPackagePath,
        nuspecs: config.nuspecs,
        basePath: structure.workPath,
        version: version
    });
});

gulp.task("nuget:push", ["nuget:pack"], function() {
  if (_.contains(["prod", "test", "labs", "demo"], config.buildType)) {
    return rm_nuget.push({ nupkgs: config.nupkgs() });
  }
});

gulp.task("default", ["nuget:push"]);
