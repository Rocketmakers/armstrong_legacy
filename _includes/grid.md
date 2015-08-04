# Grid
The grid is the main building block of using anything to do with bicep. It's built using Flexbox, so it's ultra flexible (but IE9 and lower just flat out won't work). Usage is fairly simple

## Additional classes

### .grid

#### .borders
This class adds borders to all your cells. Useful for debugging.

#### .padded
Adds 20px padding to all cells. Quite useful for bootstrapping a site fast.

#### .padded-inner
Adds 20px padding to all cells apart from the first and last, which will have no left padding if the leftmost cell and no right padding if the rightmost cell. Use this if you are using a grid to layout a whole page, or want a sidebar or card layout etc. Experiment and you'll see why this is useful!

#### .fill-container
Through the magic of flexbox, the grid will expand to fill its container fully. If you have 2 rows, they'll be 50% height each. 3 rows 33% etc etc.

### .row
No additional classes

### .col

#### .fixed
Add this class to any column you want to be fixed width, along with a width property. Great for sidebars!

## Usage example
#### MARKUP
```
<div class="grid borders">
  <div class="row">
      <div class="col">
        1
      </div>
      <div class="col">
        2
      </div>
  </div>
</div>
```
#### GENERATES
<div class="example-code">
<div class="grid borders">
  <div class="row">
      <div class="col">
        1
      </div>
      <div class="col">
        2
      </div>
  </div>
</div>
</div>
