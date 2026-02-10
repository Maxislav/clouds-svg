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

```
### update 
```js

cloud.update({
    density: 0.2
})
```