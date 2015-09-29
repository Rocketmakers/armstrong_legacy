<p align="center">
<img src="http://armstrongcss.org/assets/logolarge.svg" width="256" height="256" />
</p>
Armstrong is a lightweight modular CSS framework written in SASS. It is designed to be non-invasive to help you out at the start, but not be a nightmare when you want to add your own look and feel (like certain other frameworks...)

To get started, check out <http://armstrongcss.org>!

## Table of contents

- [Structure & Modules](#structures-&-modules)
- [Customization](#customization)
- [Third party components](#third-party-components)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Structure & Modules

Armstrong is designed to be fully modular. If you don't need something, like tables for example, just don't include it!

Below is a breakdown of the structure


```
style/
└── armstrong/
    ├── modules/
    │   ├── _base.scss
    │   ├── _buttons.scss
    │   ├── _fonts.scss
    │   ├── _forms.scss
    │   ├── _grid.scss
    │   ├── _dialog.scss
    │   ├── _helpers.scss
    │   ├── _lists.scss
    │   ├── _mixins.scss
    │   ├── _normalize.scss
    │   ├── _navigation.scss
    │   ├── _scaffold.scss
    │   ├── _progress.scss
    │   ├── _settings.scss
    │   ├── _tables.scss
    │   └── _typography.scss
    ├── armstrong.scss
    └── armstrong.css
```

#### \_base.scss

The raw essentials for armstrong. We wouldn't reccomend removing this or anything it imports, or you're gonna have a bad time. Includes the grid, fontawesome and some basic, sensible, hip & happening defaults.

#### \_buttons.scss

Self explanatory really. Adds some plain, sensible, cross browser defaults for button controls. This includes button and submit. The out of the box classes are 'positive' and 'negative', which are green and red respectively.

#### _fonts.scss

Overides base font with one from Google Fonts (open sans by default). Change this file for an easy way to change your sites global font.

#### \_grid.scss

This file is imported by bicep (via \_base) as a mandatory import. It provides a flexible grid based layout for your site. The new version uses flexbox, so make sure you're not targeting old browsers

#### \_lists.scss

Handy for bootstrapping of linear lists.

#### \_mixins.scss

This file is used by various files across armstrong. Nothing exciting here!

#### \_normalize.scss

This file is imported by armstrong as a mandatory import. It is just the latest from [normalize](http://necolas.github.io/normalize.css/).

#### \_scaffold.scss

This provides some defaults for layout pages. Strongly recommended if you want to use headers and footers (sticky or otherwise) without any hassle.

#### \_settings.scss

Provides base settings for all the rest of armstrong. You can change these if you want, but it's better just to override later yourself if you want to.

#### \_progress.scss

New in V2! Gives you a nice spinner along with a determinate/indeterminate progress bar.

#### \_navigation.scss

New in V2! If you use a nav with some a tags, you'll get a nice looking nav without any messing about.

#### \_dialog.scss

New in V2! All you need to show pure css dialogs. Again, made for minimal hassle.

#### \_tables.scss

Again, self explanatory. Provides some less hideous defaults for cross-browser tables.

#### \_typography.scss

This gives you some nice defaults for typography elements (p, span, code, h1, h2, h3, .date, .author etc)


## Customization

To customize Armstrong, you just need to crack open the armstrong.scss file and comment/remove the modules you don't need. For example here is the default with all the dumbbells and whistles

```scss
// REQUIRED IMPORTS
@import "modules/base";

// OPTIONAL IMPORTS
@import "modules/fonts";
@import "modules/typography";
@import "modules/forms";
@import "modules/tables";
@import "modules/lists";
@import "modules/buttons";
```

And here is it configured without tables

```scss
// REQUIRED IMPORTS
@import "modules/base";

// OPTIONAL IMPORTS
@import "modules/fonts";
@import "modules/typography";
@import "modules/forms";
//@import "modules/tables";
@import "modules/lists";
@import "modules/buttons";
```

Just be sure never to remove the `modules/base` import or again, you're gonna have a bad time.

## Third party components
Armstrong uses a couple of amazing components from other authors
- Font Awesome by [Dave Gandy](http://fontawesome.io)
- Normalize.css by [Nicolas Gallagher](http://nicolasgallagher.com/), co-created with [Jonathan Neal](http://music.thewikies.com/jonneal/).

Huge thanks to these guys for writing libraries we could not live without :)

## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Rocketmakers/armstrong/issues/new).

## Community

Keep track of development and community news.

- Follow [@rocketmakers on Twitter](https://twitter.com/rocketmakers).
- Implementation help may be found at Stack Overflow (tagged [`armstrong-css`](http://stackoverflow.com/questions/tagged/armstrong-css)).
- Developers should use the keyword `armstrong-css` on packages which modify or add to the functionality of Armstrong when distributing through [npm](https://www.npmjs.com/browse/keyword/armstring-css) or similar delivery mechanisms for maximum discoverability.



## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Armstrong is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.



## Creators

**Rocketmakers**

- <https://twitter.com/rocketmakers>
- <https://github.com/Rocketmakers>


## Copyright and license

Code and documentation copyright 2011-2015 Rocketmakers Ltd., and released under [the MIT license](https://github.com/twbs/armstrong/blob/master/LICENSE).

