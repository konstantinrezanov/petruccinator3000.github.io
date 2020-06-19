# timelinegenerator
Simple timeline generator, built using plain CSS and JavaScript.
## Installation 
Include main CSS-file on top of the HTML:
```html
<link rel="stylesheet" href="timelinecreator.css">
```
Include timelinecreator.js before the closing `body` tag:
```html
<script src="timelinecreator.js"></script>
```
Initalize library(replace `timeline` with ID of your timeline element): 
```JavaScript
  createTimeline({
    name:document.getElementById("timeline")
  })
```
## Usage 
Basic HTML template for this library is:
```html
<div id="timeline" class="time-line">
  <div class="time-content">
    <p class="time-date">
    </p>
    <p class="time-text">
    </p>
  </div>
</div>
```
## Customization 
CSS customziation classes:

| Class | Description |
| --- | --- |
| .time-year | Adds separate year mark on timeline |

JavaScript customization options:

| Name | Description | Default |
| --- | --- | --- |
| alternate | Choose whether or not points alternate on timeline | false |
| startRight | Choose whether or not points start from right | true |
| color | Choose color of timeline elements | black |

You can additionally customize library for your use in the included CSS file.
## License 
  MIT
