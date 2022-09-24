(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(537),o=t.n(r),s=t(645),a=t.n(s)()(o());a.push([e.id,"/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */\n* {\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: black;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    font-size: 3em;\n}\n\n#outer-cont {\n    height: 100vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n/* PAGE 1: LANDING PAGE */\n    #landing-cont {\n        display: grid;\n        grid-template-columns: 400px;\n        grid-template-rows: repeat(4, 70px);\n        gap: 10px;\n        justify-items: center;\n        align-items: center;\n    }\n\n/* PAGE 2: BUILD YOUR BOARD */\n    #build-cont, #player-cont, #bot-cont {\n        display: grid;\n        grid-template-rows: 40px 1fr 40px;\n    }\n        .prompts {\n            align-self: center;\n            justify-self: center;\n            font-size: 1.1em;\n        }\n        #player-squares, #bot-squares {\n            display: grid;\n            grid-template-columns: repeat(10, 30px);\n            grid-template-rows: repeat(10, 30px);\n            gap: 3px;\n            margin: 30px;\n        }\n            .square {\n                border: 1px solid black;\n            }\n            #bot-squares > .square:hover {\n                border: 3px solid red;\n            }\n            #build-cont > #player-squares > .square:hover {\n                border: 3px solid green;\n            }\n        #start-game {\n        }\n        .scores {\n            justify-self: center;\n            align-self: center;\n            color: blue;\n        }\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,iFAAiF;AACjF;IACI,2DAA2D;IAC3D,YAAY;IACZ,iBAAiB,IAAI,2EAA2E;AACpG;AACA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA,yBAAyB;IACrB;QACI,aAAa;QACb,4BAA4B;QAC5B,mCAAmC;QACnC,SAAS;QACT,qBAAqB;QACrB,mBAAmB;IACvB;;AAEJ,6BAA6B;IACzB;QACI,aAAa;QACb,iCAAiC;IACrC;QACI;YACI,kBAAkB;YAClB,oBAAoB;YACpB,gBAAgB;QACpB;QACA;YACI,aAAa;YACb,uCAAuC;YACvC,oCAAoC;YACpC,QAAQ;YACR,YAAY;QAChB;YACI;gBACI,uBAAuB;YAC3B;YACA;gBACI,qBAAqB;YACzB;YACA;gBACI,uBAAuB;YAC3B;QACJ;QACA;QACA;YACI,oBAAoB;YACpB,kBAAkB;YAClB,WAAW;QACf",sourcesContent:["/* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); */\n* {\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: black;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    font-size: 3em;\n}\n\n#outer-cont {\n    height: 100vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n/* PAGE 1: LANDING PAGE */\n    #landing-cont {\n        display: grid;\n        grid-template-columns: 400px;\n        grid-template-rows: repeat(4, 70px);\n        gap: 10px;\n        justify-items: center;\n        align-items: center;\n    }\n\n/* PAGE 2: BUILD YOUR BOARD */\n    #build-cont, #player-cont, #bot-cont {\n        display: grid;\n        grid-template-rows: 40px 1fr 40px;\n    }\n        .prompts {\n            align-self: center;\n            justify-self: center;\n            font-size: 1.1em;\n        }\n        #player-squares, #bot-squares {\n            display: grid;\n            grid-template-columns: repeat(10, 30px);\n            grid-template-rows: repeat(10, 30px);\n            gap: 3px;\n            margin: 30px;\n        }\n            .square {\n                border: 1px solid black;\n            }\n            #bot-squares > .square:hover {\n                border: 3px solid red;\n            }\n            #build-cont > #player-squares > .square:hover {\n                border: 3px solid green;\n            }\n        #start-game {\n        }\n        .scores {\n            justify-self: center;\n            align-self: center;\n            color: blue;\n        }\n"],sourceRoot:""}]);const i=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},537:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),s="/*# ".concat(o," */"),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([s]).join("\n")}return[n].join("\n")}},654:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var r=t(379),o=t.n(r),s=t(795),a=t.n(s),i=t(569),c=t.n(i),l=t(565),u=t.n(l),d=t(216),p=t.n(d),A=t(589),m=t.n(A),g=t(426),f={};f.styleTagTransform=m(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),o()(g.Z,f);const h=g.Z&&g.Z.locals?g.Z.locals:void 0},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var p=t(d),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(A);else{var m=o(A,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=t(s[a]);n[i].references--}for(var c=r(e,o),l=0;l<s.length;l++){var u=t(s[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}s=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},524:(e,n,t)=>{t(654);const r=t(839),o=t(963),s=t(473),a=t(995);function i(e){if(e<10){const n=e;return[parseInt(0),parseInt(n)]}if(e>=10){const n=e.toString()[0],t=e.toString()[1];return[parseInt(n),parseInt(t)]}}console.clear(),console.log("-----------");const c=r([]),l=r([]),u=o("placeholder",c),d=o("computer bot",l);u.gameBoard.reset(),d.gameBoard.reset(),function(e){const n=t(796);e.gameBoard.boardArr=n}(d),console.log(d.gameBoard.boardArr),document.getElementById("start-button").addEventListener("click",(()=>{const e=document.getElementById("player-name").value;console.log("playerName: "+e),document.getElementById("landing-cont").remove(),u.name=e.toUpperCase(),function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div");e.id="build-cont",n.id="player-prompt",n.className="prompts",t.id="player-squares",n.innerHTML=u.name+", PLACE YOUR CARRIER!",document.getElementById("outer-cont").appendChild(e),e.appendChild(n),e.appendChild(t);for(let e=0;e<100;e++){const n=document.createElement("div");n.className="square",n.addEventListener("click",A.bind(this,e,n,p)),t.appendChild(n)}}()}));const p=[0];function A(e,n,t){if(6===t[0]){document.getElementById("player-prompt").innerHTML="Done! Now hit START when you are ready!";const e=document.createElement("input"),n=document.getElementById("build-cont");e.id="start-game",e.type="button",e.value="START GAME",e.addEventListener("click",m),n.appendChild(e)}const r=i(e)[0],o=i(e)[1],a=s[t[0]];if(!0===c.placeShip(a,r,o,n,t)){const e=s[t[0]];document.getElementById("player-prompt").innerHTML="NOW PLACE YOUR "+e.name.toUpperCase()+"!"}}const m=()=>{document.getElementById("start-game").remove(),document.querySelectorAll(".square").forEach((e=>{e.style["background-color"]="white"})),function(){const e=document.getElementById("outer-cont"),n=document.getElementById("build-cont"),t=document.getElementById("player-prompt"),r=n.cloneNode(!0),o=r.firstChild;n.id="player-cont",r.id="bot-cont",e.appendChild(r),e.style["grid-template-columns"]="repeat(2, 1fr)",o.id="bot-prompt",r.firstChild.nextSibling.id="bot-squares";const s=document.createElement("div"),c=document.createElement("div");s.id="player-score",c.id="bot-score",s.className="scores",c.className="scores",s.innerHTML="Player score: 0",c.innerHTML="Bot score: 0",n.appendChild(s),r.appendChild(c),t.innerHTML="FRIENDLY WATERS",o.innerHTML="ENEMY WATERS",a(u,d,i)}()};e.exports={idxToCoords:i,player1:u,player2:d}},839:e=>{e.exports=function(e){return{boardArr:e,reset(){for(let n=0;n<10;n++){e.push([]);for(let t=0;t<10;t++)e[n].push([])}return e},placeShip(e,n,t,r,o){if(e.length+t<11){for(let r=0;r<e.length;r++)this.boardArr[n][t+r]=e;for(let n=0;n<e.length;n++)r.style["background-color"]="grey",r=r.nextSibling;return o[0]=o[0]+1,!0}return alert("Ship will not fit! Try again."),!1},receiveAttack(e,n,t){0===this.boardArr[e][n].length?(console.log("MISSED!"),this.boardArr[e][n]="MISS",t.style["background-color"]="blue"):0!==this.boardArr[e][n].length&&(console.log("HIT @: "+e+","+n),this.boardArr[e][n]="HIT",t.style["background-color"]="red")}}}},963:e=>{e.exports=function(e,n){return{name:e,gameBoard:n}}},288:e=>{e.exports=function(e,n,t){return{length:e,sunk:n,name:t,hit(e){},isSunk(e){for(let n=0;n<e.length-1;n++)e[n].name===this.name&&console.log("nope, not sunk yet"),console.log("couldnt find... SUNK!")}}}},995:e=>{function n(e,n,t){const r=t[0],o=t[1];"HIT"===n.gameBoard.boardArr[r][o]||"MISS"===n.gameBoard.boardArr[r][o]?alert("Already fired here. Try again."):(n.gameBoard.receiveAttack(r,o,e),console.log(n.gameBoard.boardArr))}e.exports=function(e,t,r){console.log("running gameLoop...");const o=document.getElementById("bot-squares").childNodes;let s=0;o.forEach((e=>{e.addEventListener("click",n.bind(this,e,t,r(s))),s+=1}))}},473:(e,n,t)=>{const r=t(288),o=r(5,!1,"carrier"),s=r(4,!1,"battleship"),a=r(3,!1,"cruiser"),i=r(2,!1,"first destroyer"),c=r(2,!1,"second destroyer"),l=r(1,!1,"first sub"),u=r(1,!1,"second sub"),d=(r(5,!1,"carrier"),r(4,!1,"battleship"),r(3,!1,"cruiser"),r(2,!1,"first destroyer"),r(2,!1,"second destroyer"),r(1,!1,"first sub"),r(1,!1,"second sub"),[o,s,a,i,c,l,u]);e.exports=d},796:e=>{e.exports=[[[],[],[],[],[],[],[],[],[],[]],[[],{length:5,sunk:!1,statusArr:[!1,!1,!1,!1,!1],name:"carrier"},{length:5,sunk:!1,statusArr:[!1,!1,!1,!1,!1],name:"carrier"},{length:5,sunk:!1,statusArr:[!1,!1,!1,!1,!1],name:"carrier"},{length:5,sunk:!1,statusArr:[!1,!1,!1,!1,!1],name:"carrier"},{length:5,sunk:!1,statusArr:[!1,!1,!1,!1,!1],name:"carrier"},[],[],[],[]],[[],[],[],[],[],[],[],{length:3,sunk:!1,statusArr:[!1,!1,!1],name:"cruiser"},{length:3,sunk:!1,statusArr:[!1,!1,!1],name:"cruiser"},{length:3,sunk:!1,statusArr:[!1,!1,!1],name:"cruiser"}],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],{length:4,sunk:!1,statusArr:[!1,!1,!1,!1],name:"battleship"},{length:4,sunk:!1,statusArr:[!1,!1,!1,!1],name:"battleship"},{length:4,sunk:!1,statusArr:[!1,!1,!1,!1],name:"battleship"},{length:4,sunk:!1,statusArr:[!1,!1,!1,!1],name:"battleship"},[],[],[],[]],[{length:2,sunk:!1,statusArr:[!1,!1],name:"second destroyer"},{length:2,sunk:!1,statusArr:[!1,!1],name:"second destroyer"},[],[],[],[],[],[],[],[]],[{length:1,sunk:!1,statusArr:[!1],name:"first sub"},[],[],[],{length:2,sunk:!1,statusArr:[!1,!1],name:"first destroyer"},{length:2,sunk:!1,statusArr:[!1,!1],name:"first destroyer"},[],[],[],[]],[[],[],[],[],[],[],[],[],{length:1,sunk:!1,statusArr:[!1],name:"second sub"},[]]]}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={id:r,exports:{}};return e[r](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,t(524)})();
//# sourceMappingURL=bundle.js.map