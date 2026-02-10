# Realistic clouds with svg animation



## Preview
[![Clouds Demo](assets/clouds.GIF)](https://maxislav.github.io/clouds-svg/)

## Usage

copy
[clouds.es.d.ts](release/clouds.es.d.ts)
[clouds.es.js](release/clouds.es.js)
to ./lib folder

```js
import { Clouds } from '@app/lib/clouds.es.js';

const cloud = new Clouds({element:'#app',density: 0.6}).init();

```
### update 
```js

cloud.update({
    density: 0.2
})
```