# Realistic clouds with svg animation



## Preview
[![Clouds Demo](assets/clouds.GIF)](https://maxislav.github.io/clouds-svg/)

## Usage

copy from  
[release/clouds.es.d.ts](release/clouds.es.d.ts)  
[release/clouds.es.js](release/clouds.es.js)  
to your ./lib folder  


```js
import { Cloud } from '@app/lib/clouds.es.js';

const cloud = new Cloud({element:'#app',density: 0.6}).init();

// update
cloud.update({
    density: 0.2
})

```

## Example
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>clouds</title>
    <link rel="stylesheet" href="./clouds.css">
    <script type="module" src="./clouds.es.js"></script>
</head>
<body>
<div id="app">
    <div class="my-clouds"></div>
    <div class="my-clouds"></div>
    <div class="my-clouds"></div>
</div>


<script type="module">
    import {Cloud} from './clouds.es.js';

    new Cloud({element: '.my-clouds:nth-child(1)', density: 0.2}).init()
    new Cloud({element: '.my-clouds:nth-child(2)', density: 0.5}).init()
    new Cloud({element: '.my-clouds:nth-child(3)', density: 0.4}).init()
</script>

</body>
</html>

```