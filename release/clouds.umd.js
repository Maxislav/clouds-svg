(function(n,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(n=typeof globalThis<"u"?globalThis:n||self,a(n.Cloud={}))})(this,(function(n){"use strict";const a=`<div class="clouds">\r
    <div class="clouds__front">\r
        <div>\r
            <svg preserveAspectRatio="none" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">\r
                <defs>\r
                    <radialGradient id="cloudGrad" cx="50%" cy="50%" r="140%" fx="10%" fy="1%"\r
                                    gradientTransform="translate(0, 0) scale(1, 0.3)"\r
                    >\r
                        <stop offset="0%" style="stop-color:white; stop-opacity:0"/>\r
                        <stop offset="5%" style="stop-color:white; stop-opacity:1"/>\r
                        <stop offset="7%" style="stop-color:white; stop-opacity:1"/>\r
                        <stop offset="20%" style="stop-color:white; stop-opacity:1"/>\r
                        <stop offset="60%" style="stop-color:#dddddd; stop-opacity:1"/>\r
\r
<!--                        <stop offset="60%" style="stop-color:#7e8088; stop-opacity:1"/>-->\r
                        <stop offset="70%" style="stop-color:#394a5e; stop-opacity:1"/>\r
                        <stop offset="90%" style="stop-color:#394a5e; stop-opacity:1"/>\r
                        <stop offset="100%" style="stop-color:#394a5e; stop-opacity:0"/>\r
                    </radialGradient>\r
\r
                    <filter id="fluffy" x="-50%" y="-50%" width="200%" height="200%">\r
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />\r
                    </filter>\r
\r
                    <filter id="shadow" x="-20%" y="-20%" width="300%" height="300%">\r
                        <feDropShadow dx="0" dy="3" stdDeviation="1" flood-color="black" flood-opacity="0.7"/>\r
                    </filter>\r
                </defs>\r
\r
                <g filter="url(#shadow)">\r
                    <g filter="url(#fluffy)" fill="url(#cloudGrad)" transform="scale(1, 0.8)" #cloudsContainer1>\r
                    </g>\r
                </g>\r
\r
                <g filter="url(#shadow)">\r
                    <g filter="url(#fluffy)" fill="url(#cloudGrad)" transform="scale(1, 1)" #cloudsContainer2>\r
                    </g>\r
                </g>\r
                <g filter="url(#shadow)">\r
                    <g filter="url(#fluffy)" fill="url(#cloudGrad)" transform="scale(1, 1)" #cloudsContainer3>\r
                    </g>\r
                </g>\r
            </svg>\r
        </div>\r
    </div>\r
</div>`;function i(r,t){return Math.floor(Math.random()*(t-r+1))+r}function u(r,t,o=3){let e=0;for(let l=0;l<o;l++)e+=Math.random();const s=e/o;return Math.floor(s*(t-r+1))+r}class f{cloudsContainerList;childEls=[];options={element:"#app",density:1};cloudsAll=1;constructor(t={}){this.options={...this.options,...t},this.cloudsAll=this.options.density;const o=document.createElement("section");o.innerHTML=a,this.cloudsContainerList=[o.querySelector("[\\#cloudsContainer1]"),o.querySelector("[\\#cloudsContainer2]"),o.querySelector("[\\#cloudsContainer3]")],typeof this.options.element=="string"?document.querySelector(this.options.element).appendChild(o):this.options.element.appendChild(o)}init(){for(;this.childEls.length;)this.childEls.pop().remove();return this.cloudsContainerList.forEach(t=>{this.cloudsDraw(t)}),this}update(t={}){return this.options={...this.options,...t},this.cloudsAll=this.options.density,this.init(),this}cloudsDraw(t){const o="http://www.w3.org/2000/svg";for(let e=0;e<50+100*this.cloudsAll/.5;e++){const s=document.createElementNS(o,"g");this.childEls.push(s),s.innerHTML=this.getCloudBlock(),t.appendChild(s)}}getCloudBlock(){const t=i(1,8),o=i(10,15),e=u(50-80*this.cloudsAll,50+70*this.cloudsAll),s=u(1,20),l=i(40,30),p=i(l-10*this.cloudsAll,l-20*this.cloudsAll),d=i(10,20),c=i(0,20);return`
           <circle cx="${e}" cy="20" r="7">
                        <animate attributeName="opacity" values="0;1;1;0.2;0" begin="-${c}s" dur="${d}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="cy" values="${l};${p}" begin="-${c}s" dur="${d}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="cx" values="${e};${e+s}" begin="-${c}s" dur="${d}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="r" values="${t};${o}" dur="${d}s" begin="-${c}s"  repeatCount="indefinite" ></animate>
           </circle>
        `}}n.Cloud=f,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
