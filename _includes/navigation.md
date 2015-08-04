# Navigation
Navigation is a tricky one, as things can vary massively dependant on your framework so we've just added some sensible defaults for the nav element along with some simple breadcrumb logic.

## Usage example
#### MARKUP
```
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<nav class="breadcrumbs">
  <a href="#">Home</a>
  <a href="#">Level 1</a>
  <a href="#">Level 2</a>
</nav>
```
#### GENERATES
<div class="example-code" style="padding-bottom: 20px;">
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
<br/>
<br/>
<nav class="breadcrumbs">
  <a href="#">Home</a>
  <a href="#">Level 1</a>
  <a href="#">Level 2</a>
</nav>
</div>
