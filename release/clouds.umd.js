(function(n,c){typeof exports=="object"&&typeof module<"u"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):(n=typeof globalThis<"u"?globalThis:n||self,c(n.Cloud={}))})(this,(function(n){"use strict";const c=`<div class="clouds">\r
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
</div>`;function i(r,o){return Math.floor(Math.random()*(o-r+1))+r}function f(r,o,t=3){let l=0;for(let s=0;s<t;s++)l+=Math.random();const e=l/t;return Math.floor(e*(o-r+1))+r}class p{cloudsContainerList;childEls=[];options={element:"#app",volume:1,clustering:3,noice:50};cloudsAll=1;constructor(o={}){this.options={...this.options,...o},this.cloudsAll=this.options.volume;const t=document.createElement("slot");t.innerHTML=c,this.cloudsContainerList=[t.querySelector("[\\#cloudsContainer1]"),t.querySelector("[\\#cloudsContainer2]"),t.querySelector("[\\#cloudsContainer3]")],typeof this.options.element=="string"?document.querySelector(this.options.element).appendChild(t):this.options.element.appendChild(t)}init(){for(;this.childEls.length;)this.childEls.pop().remove();return this.cloudsContainerList.forEach((o,t)=>{this.cloudsDraw(o,this.options.clustering+t)}),this}update(o={}){return this.options={...this.options,...o},this.cloudsAll=this.options.volume,this.init(),this}cloudsDraw(o,t){const l="http://www.w3.org/2000/svg";for(let e=0;e<this.options.noice+this.options.noice*this.cloudsAll/.5;e++){const s=document.createElementNS(l,"g");this.childEls.push(s),s.innerHTML=this.getCloudBlock(t),o.appendChild(s)}}getCloudBlock(o){const t=i(1,8),l=i(10,15),e=f(50-80*this.cloudsAll,50+70*this.cloudsAll),s=f(1,20,o),u=i(40,30),h=i(u-10*this.cloudsAll,u-20*this.cloudsAll),a=i(10,20),d=i(0,20);return`
           <circle cx="${e}" cy="20" r="7">
                        <animate attributeName="opacity" values="0;1;1;0.2;0" begin="-${d}s" dur="${a}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="cy" values="${u};${h}" begin="-${d}s" dur="${a}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="cx" values="${e};${e+s}" begin="-${d}s" dur="${a}s" repeatCount="indefinite" ></animate>
                        <animate attributeName="r" values="${t};${l}" dur="${a}s" begin="-${d}s"  repeatCount="indefinite" ></animate>
           </circle>
        `}}n.Cloud=p,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
