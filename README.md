# Armstrong CSS
##### A CSS Framework

### What is Armstrong?

Armstrong is a handy set of defaults and controls written in SASS which will give you a solid yet unobtrusive starting point to create a website.

#### Structure

Inside the SASS folder you'll find multiple *.SCSS files, each providing different elements :

##### Initial setup

* **_settings.scss** - This holds all the customisable variables for the framework. Change these and recompile to customise Armstrong.


##### Required files

* **_armstrong.scss** - This file is just an import hub for all other parts of the framework. It is the only file that generates a css output.

##### Utility files

* **_reset.scss** - Based on Normalize.css, this resets cross browser differences to give a clean slate to work with
* **_utilities.scss** - Custom built helpers for direct use in html.

##### Modular files

* **_layout.scss** - Provides the grid, image box and sticky header/footer controls
* **_fonts.scss** -  Font awesome, plus a base font choice (defined in settings) from google fonts. Open Sans by default
* **_typography.scss** - Standard typographical styles (h1,h2,p,a etc)
* **_forms.scss** - Inputs, textareas and default button styles
* **_buttons.scss** - Basic styling for button elements, explained in more detail later
* **_tables.scss** - Some basic table styles

### Getting started

**Shell template**

Use the following code in your master/shell page to get a starting template with a header footer and menu:

```
<body>
<div class="wrapper">
    <div class="sticky-header">
        <div class="header-top">
            <div class="width-wrapper">
                LOGO GOES HERE!
            </div>
        </div>
        <div class="header-bottom">
            <nav class="width-wrapper">
                <a href="#">Menu item 1</a>
                <a href="#">Menu item 2</a>
                <a href="#">Menu item 3</a>
                <a href="#">Menu item 4</a>
            </nav>
        </div>
    </div>
    <div class="body-area width-wrapper">
          YOUR CONTENT GOES IN HERE!
    </div>
    <div class="push"></div>
</div>

<div class="sticky-footer">
    <div class="width-wrapper">
        COPYRIGHT INFO GOES HERE!
    </div>
</div>
</body>
```


**12 column grid**

The following will give you a 12 column grid with 2 rows. The first has 3 cells, the second has 4. The only rule you must remember is that the amount of columns will always need to add up to 12 (or whatever you have configured in your _settings file)

```
<div class="grid">
   <div class="row">
       <div class="col4">
            I span 4 cells (33% of the grid)
       </div>
       <div class="col4">
            I span 4 cells (33% of the grid)
       </div>
       <div class="col4">
            I span 4 cells (33% of the grid)
       </div>
    </div>
    <div class="row">
       <div class="col3">
            I span 3 cells (25% of the grid)
       </div>
       <div class="col3">
            I span 3 cells (25% of the grid)
       </div>
       <div class="col3">
            I span 3 cells (25% of the grid)
       </div>
       <div class="col3">
            I span 3 cells (25% of the grid)
       </div>
    </div>
</div>
```

**Buttons**

Armstrong now contains some basic button templates to get you started. Usage is simple, all you need to do is combine a size ('big' or 'small') with a color. Optionally specifying a class of 'full-width' will make the button fill its container.

You can use any color from the 5 color theme ('primary', 'secondary', 'tertiary', 'quaternary', 'quinary') plus standard 'red', 'amber' and 'green' alert colors.

```
<button class='small green'>I'm a small green button</button>
<button class='big red full-width'>I'm big red button that will fill it's containers width</button>
```
