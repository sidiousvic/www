!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,...t){return String.raw(e,t)}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(3);const o=i(n(4)),r=i(n(5));document.body.innerHTML=r.default();function s(e){const t=e.target;t.classList.add("dragging-icon");const n=window.getComputedStyle(t,null);e.dataTransfer.setData("text/plain",parseInt(n.getPropertyValue("left"),10)-e.clientX+","+(parseInt(n.getPropertyValue("top"),10)-e.clientY));const i=document.createElement("img");i.src=o.default,e.dataTransfer.setDragImage(i,40,34.5)}[...document.getElementsByClassName("desktop-icon")].map(e=>{e.addEventListener("dragstart",s)}),document.body.addEventListener("dragover",(function(e){e.preventDefault()})),document.body.addEventListener("drop",(function(e){const t=e.dataTransfer.getData("text/plain").split(","),n=document.getElementsByClassName("dragging-icon")[0];n.style.left=e.clientX+parseInt(t[0],10)+"px",n.style.top=e.clientY+parseInt(t[1],10)+"px",n.classList.remove("dragging-icon")}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t),t.default=n.p+"749cbc1ff2b691cb67d1044a510a4cf6.png"},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(6));t.default=function(){return`<div id="main">${o.default()}</div>\n  `}},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(7);const o=i(n(9));t.default=function(){return`\n  <div id="window" class="img">\n    <s-menu-bar/>\n    ${o.default({id:"musics",type:"folder",text:"musics"})}\n    ${o.default({id:"pics",type:"folder",text:"pics"})}\n    ${o.default({id:"inditings",type:"folder",text:"inditings"})}\n  </div >\n  `}},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(8);const o=i(n(0));class r extends HTMLElement{constructor(){super(),this.items=["THIS WWW IS UNDER CONSTRUCTION 🏴‍☠️ GITHUB/SIDIOUSVIC"],this.innerHTML=o.default`
    <div class="img" id="kermitoid-logo"></div>
    <div class="menu-item" id="os-title"><p>Sidi OS</p></div>
    ${this.items.map(e=>o.default`<div class="menu-item"><p>${e}</p></div>`)}
    <s-clock>👽</s-clock>
  `,this.styles(),this.innerHTML=this.innerHTML}styles(){this.attachShadow({mode:"open"}).innerHTML=o.default`
      <slot></slot>
      <style>
        :host {
          display: flex;
          justify-content: left;
          align-items: center;
          width: 100%;
          height: 40px;
          background: #111;
          z-index: 1;
        }

        #kermitoid-logo {
          height: 100%;
          image-rendering: pixelated;
          width: 40px;
          background-image: url("./assets/kermitoid_logo.png");
          background-size: cover;
          cursor: pointer;
        }

        #kermitoid-logo:hover {
          background-size: calc(140%);
        }

        .menu-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 10px;
          color: whitesmoke;
          background: #111;
          cursor: pointer;
          font-style: italic;
        }

        .menu-item p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
          line-height: 100%;
        }

        #os-title {
          font-style: normal;
          font-weight: 500;
          font-size: 1.2em;
        }
      </style>
    `}}customElements.define("s-menu-bar",r)},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(0));class r extends HTMLElement{constructor(){super(),this.styles(),this.logic()}logic(){return setInterval(()=>{this.innerHTML=this.time},1e3)}styles(){this.attachShadow({mode:"open"}).innerHTML=o.default`
      <slot></slot>
      <style>
        :host {
          padding: 0 10px;
          color: whitesmoke;
          font-style: normal;
          margin-left: auto;
        }
      </style>
    `}get time(){return(new Date).toLocaleDateString("ja-JP",{weekday:"long",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).toLocaleLowerCase()}}customElements.define("s-clock",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({id:e,type:t,text:n}){return`\n    <div \n      id=${e} \n      class="desktop-icon ${t}" \n      draggable="true">\n        <p>${n}</p>\n    </div>\n`}}]);