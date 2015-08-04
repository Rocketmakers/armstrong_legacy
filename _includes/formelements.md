# Form elements
Armstrong tidies up and unifies the styling of all popular form elements across all browsers, giving you a nice plain default style to get started with. We've also added a couple of nice helpers like suffix and prefix inputs and a nice wrapper to join an input and a button.

## Usage example
#### MARKUP
``` html
<input type="text" placeholder="I am a text input, type in me..."/>
<select>
  <option>option 1</option>
  <option>option 2</option>
  <option>option 3</option>
</select>
<div class="checkbox">
  <input id="check1" type="checkbox">
  <label for="check1">Check me</label>
</div>
<div class="checkbox">
  <input name="radiog" id="radio1" type="radio">
  <label for="radio1">Check me</label>
</div>
<div class="checkbox">
  <input name="radiog" id="radio2" type="radio">
  <label for="radio2">Check me</label>
</div>
<div class="button-input">
    <input type="text" />
    <button>Submit</button>
</div>
<div class="prefix-input">
    <div>www.</div>
    <input type="text" />
</div>
<div class="suffix-input">
    <input type="text" />
    <div>.com</div>
</div>
```
#### GENERATES
<div class="example-code" style="padding-bottom: 20px;">
  <input type="text" placeholder="I am a text input, type in me..."/>
  <br/><br/>
  <select>
  <option>option 1</option>
  <option>option 2</option>
  <option>option 3</option>
  </select>
  <br/><br/>
  <div class="checkbox">
    <input id="check1" type="checkbox">
    <label for="check1">Check me</label>
  </div>
<br/><br/>
  <div class="checkbox">
    <input name="radiog" id="radio1" type="radio">
    <label for="radio1">Check me</label>
  </div>
  <div class="checkbox">
    <input name="radiog" id="radio2" type="radio">
    <label for="radio2">Check me</label>
  </div>
  <br/><br/>
  <div class="button-input">
                <input type="text" />
                <button>Submit</button>
            </div>
            <br/>
            <br/>
            <div class="prefix-input">
                <div>www.</div>
                <input type="text" />
            </div>
            <br/>
            <br/>
            <div class="suffix-input">
                <input type="text" />
                <div>.com</div>
            </div>
</div>
