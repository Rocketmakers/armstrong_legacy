---
layout: page
title: Documentation
permalink: /docs/
---

# Armstrong

Armstrong is a lightweight modular CSS framework written in SASS. It is designed to be none invasive to help you out at the start but not be a nightmare when you want to add your own designs (like certain other frameworks...)

To get started, check out <http://armstrong.org>!

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

Armstrong is designed to be fully modular. If you dont need something, like tables for example, just dont include it! 

Below is a breakdown of the structure


```
style/
└── armstrong/
    ├── modules/
    │   ├── _base.scss
    │   ├── _buttons.scss
    │   ├── _cards.scss
    │   ├── _fonts.scss
    │   ├── _forms.scss
    │   ├── _grid.scss
    │   ├── _imagebox.scss
    │   ├── _lists.scss
    │   ├── _mixins.scss
    │   ├── _reset.scss
    │   ├── _scaffold.scss
    │   ├── _settings.scss
    │   ├── _tables.scss
    │   └── _typography.scss
    ├── armstrong.scss
    └── armstrong.css	
```

#### _base.scss

This file is imported by bicep as a mandatory import. It contains base settings, [normalize](http://necolas.github.io/normalize.css/), the grid and some essential layout tools for bicep

#### _buttons.scss

Self explanatory really. Adds some plain sensible cross browser defaults for button controls. This includes button, submit and any element with class of button

#### _cards.scss

Everything needed for the card layouts.

#### _fonts.scss

Overides base font with one from Google Fonts (open sans by default). Change this file for an easy way to change your sites global font.

#### _grid.scss

This file is imported by bicep (via _base) as a mandatory import. It provides a flexible grid based layout for your site.

#### _imagebox.scss

This gives you a responsive 5 column image gallery

#### _lists.scss

Provides block and wrap styles for Uls. Handy for bootstrapping of linear lists.

#### _mixins.scss

This file is imported by bicep (via _base) as a mandatory import. It provides utilities for use in SCSS files

#### _reset.scss

This file is imported by bicep (via _base) as a mandatory import. It is just the latest from [normalize](http://necolas.github.io/normalize.css/).

#### _scaffold.scss

This file is imported by bicep (via _base) as a mandatory import. This provides some helpers including the microclearfix and widthwrapper classes.

#### _settings.scss

Provides base settings for all the rest of bicep. Feel free to tweak this to your needs, but its always better just to override anything you want to change yourself in your own CSS.

#### _tables.scss

Again, self explanatory. Provides some less hideuos defaults for tables cross browser.

#### _typography.scss

This gives you some nice defaults for typography elements (p, span, code, h1, h2, h3, .date, .author etc)


## Customization

To customize Armstrong, you just need to crack open the armstrong.scss file and comment/remove the modules you dont need. For example here is the default with all the dumbbells and whistles
```
// REQUIRED IMPORTS
@import "modules/base";

// OPTIONAL IMPORTS
@import "modules/fonts";
@import "modules/typography";
@import "modules/forms";
@import "modules/tables";
@import "modules/lists";
@import "modules/buttons";
@import "modules/cards";
```
And here is it configured without tables or cards
```
// REQUIRED IMPORTS
@import "modules/base";

// OPTIONAL IMPORTS
@import "modules/fonts";
@import "modules/typography";
@import "modules/forms";
//@import "modules/tables";
@import "modules/lists";
@import "modules/buttons";
//@import "modules/cards";
```
Just be sure never to remove the `modules/base` import or you're gonna have a bad time.

## Third party components
Armstrong uses a couple of amazing components from other authors
- Font Awesome by Dave Gandy - http://fontawesome.io
- Normalize.css by [Nicolas Gallagher](http://nicolasgallagher.com/), co-created with [Jonathan Neal](http://music.thewikies.com/jonneal/).

Huge thanks to these guys for writing libraries I could not live without :)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/rocketmake/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/rocketmake/issues/new).

## Contributing

Please read through our [contributing guidelines](https://github.com/twbs/rocketmake/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/twbs/rocketmake/tree/master/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/twbs/rocketmake/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.



## Community

Keep track of development and community news.

- Follow [@getrocketmake on Twitter](https://twitter.com/getrocketmake).
- Read and subscribe to [The Official rocketmake Blog](http://blog.getrocketmake.com).
- Implementation help may be found at Stack Overflow (tagged [`twitter-rocketmake-3`](http://stackoverflow.com/questions/tagged/twitter-rocketmake-3)).
- Developers should use the keyword `rocketmake` on packages which modify or add to the functionality of rocketmake when distributing through [npm](https://www.npmjs.com/browse/keyword/rocketmake) or similar delivery mechanisms for maximum discoverability.



## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, rocketmake is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.



## Creators

**Rocketmakers**

- <https://twitter.com/rocketmakers>
- <https://github.com/rocketmakers>


## Copyright and license

Code and documentation copyright 2011-2015 Rocketmakers Ltd. Code released under [the MIT license](https://github.com/twbs/rocketmake/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/rckt/rocketmake/blob/master/docs/LICENSE).