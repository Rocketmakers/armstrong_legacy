# Lists
We've also got a couple of nice classes to stick on ULs to avoid the usual 'list-style: none' you have to do everywhere.

## Additional classes

### ul

#### .block-list
Lays items out vertically with dark text on a white background.

#### .wrap-list
Same as above, but items will wrap 2 per row. Be sure to also add '.cf' to clearfix.

#### .padded
Adds 20px padding to list items

## Usage example
#### MARKUP
``` html
<ul class="block-list padded">
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
</ul>

<ul class="wrap-list padded cf">
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
</ul>
```
#### GENERATES
<div class="example-code"  style="padding-bottom: 20px;">
<ul class="block-list padded">
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
</ul>
<br/>
<ul class="wrap-list padded cf">
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
  <li class="padded">item</li>
</ul>

</div>
