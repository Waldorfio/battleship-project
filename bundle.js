(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */\n* {\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: black;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    font-size: 3em;\n}\n\n#outer-cont {\n    height: 100vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#landing-cont {\n    display: grid;\n    grid-template-columns: 400px;\n    grid-template-rows: repeat(4, 70px);\n    gap: 10px;\n    justify-items: center;\n    align-items: center;\n}\n\n#square-cont {\n    display: grid;\n    grid-template-columns: repeat(10, 5px);\n    grid-template-rows: repeat(10, 5px);\n    gap: 3px;\n\n    border: 1px solid red;\n}\n    .square {\n        border: 1px solid black;\n    }\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,iFAAiF;AACjF;IACI,2DAA2D;IAC3D,YAAY;IACZ,iBAAiB,IAAI,2EAA2E;AACpG;AACA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,mCAAmC;IACnC,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,QAAQ;;IAER,qBAAqB;AACzB;IACI;QACI,uBAAuB;IAC3B",sourcesContent:["/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */\n* {\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: black;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    font-size: 3em;\n}\n\n#outer-cont {\n    height: 100vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n#landing-cont {\n    display: grid;\n    grid-template-columns: 400px;\n    grid-template-rows: repeat(4, 70px);\n    gap: 10px;\n    justify-items: center;\n    align-items: center;\n}\n\n#square-cont {\n    display: grid;\n    grid-template-columns: repeat(10, 5px);\n    grid-template-rows: repeat(10, 5px);\n    gap: 3px;\n\n    border: 1px solid red;\n}\n    .square {\n        border: 1px solid black;\n    }\n"],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(A);else{var m=o(A,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),A=t(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(A.Z,m),A.Z&&A.Z.locals&&A.Z.locals,console.clear(),console.log("-----------");const f=[];for(let e=0;e<10;e++){f.push([]);for(let n=0;n<10;n++)f[e].push([])}function g(e){console.log("index: "+e)}document.getElementById("start-button").addEventListener("click",(()=>{const e=document.getElementById("player-name").value;document.getElementById("landing-cont").innerHTML="",console.log("playerName: "+e),function(){const e=document.createElement("div");e.id="build-cont",document.getElementById("outer-cont").appendChild(e);const n=document.createElement("div");n.id="prompt-build",n.innerHTML="Build your board TEST##",e.appendChild(n);const t=document.createElement("div");t.id="square-cont",e.appendChild(t);for(let e=0;e<100;e++){const n=document.createElement("div");n.className="square",n.addEventListener("click",g.bind(this,e)),t.appendChild(n)}}()}))})()})();
//# sourceMappingURL=bundle.js.map