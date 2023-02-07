/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(//db.onlinewebfonts.com/c/6c418c270348070b8e5ebbaf78a94917?family=Bombardment+3D);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: \"Special Elite\", monospace;\n    color: black;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n    text-rendering: optimizeLegibility; /* For safari */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden; /* Hides scrollbar across x-axis */\n    background-color: #b9b9b9;\n}\na {    /* Removes default styling for links, and React Links */\n    text-decoration: none;\n    color: inherit;\n}\n/*–––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n/* LANDING PAGE\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1 {\n    font-family: 'Bombardment 3D';\n    font-size: 5em;\n    font-weight: 100;\n    letter-spacing: 0.1rem;\n}\n#activity {\n    width: 500px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 1.0em;\n    font-weight: 100;\n    font-family: 'Press Start 2P', cursive;\n    letter-spacing: 0rem;\n    position: fixed;\n    bottom: 0;\n    left: calc(50vw - 250px - 35px);\n    box-shadow: 0 5px 20px rgba(0,0,0,0.3);\n    margin: 5px;\n    padding: 25px;\n    background-color: rgb(255, 255, 255);\n    color: rgb(0, 0, 0);\n    border: 5px double black;\n}\n#enter-name {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 0.9em;\n}\n#player-name {\n    font-family: 'Press Start 2P', cursive;\n    height: 40px;\n    border: 5px double black;\n    border-radius: 7px;\n    font-size: 1.0em;\n    font-weight: 500;\n    letter-spacing: 0.1rem;\n    padding: 10px 20px 10px 20px;\n}\n#start-button, #start-game {\n    font-family: 'bombardment';\n    font-size: 1.1em;\n    font-weight: 100;\n    letter-spacing: 0.2rem;\n    text-align: center;\n\tdisplay: inline-block;\n\tmargin: 5px;\n    padding: 15px;\n    background-color: lightgray;\n    color: rgb(0, 0, 0);\n\tborder-radius: 7px;\n    box-shadow: 0 .2em gray; \n    cursor: pointer;\n}\n#start-game {\n    font-size: 1.4em;\n    height: 70px;\n    width: 250px;\n    padding: 10px 30px 10px 30px;\n    align-self: center;\n    justify-self: center;\n}\n#start-button:active, #start-game:active {\n\tbox-shadow: none;\n\tposition: relative;\n\ttop: .2em;\n}\n\n#outer-cont {\n    height: 100vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n#landing-cont {\n    display: grid;\n    grid-template-columns: 400px;\n    grid-template-rows: repeat(4, 70px);\n    gap: 10px;\n    justify-items: center;\n    align-items: center;\n}\n\n/* BUILD YOUR BOARD/GAME LOOP\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n#build-cont, #player-cont, #bot-cont {\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    grid-template-columns: 500px;\n    align-items: center;\n    justify-items: center;\n}\n    .prompts {\n        font-family: 'Press Start 2P', cursive;\n        text-transform: uppercase;\n        font-size: 0.8em;\n        font-weight: 100;\n        align-self: center;\n        justify-self: center;\n        color: rgb(0, 0, 0);\n        border: 5px double black;\n        display: inline-block;\n        margin: 5px;\n        padding: 20px 12px 20px 12px;\n        background-color: lightgray;\n        color: rgb(0, 0, 0);\n        box-shadow: 0 .2em gray; \n    }\n    #player-squares, #bot-squares {\n        display: grid;\n        grid-template-columns: repeat(10, 30px);\n        grid-template-rows: repeat(10, 30px);\n        gap: 3px;\n        margin: 30px;\n    }\n        #player-squares, #bot-squares {\n            padding: 17px;\n            box-shadow: 0 15px 30px rgba(0,0,0,0.3);\n            border-radius: 10px;\n            background-color: #C4A484;\n        }\n        .square {\n            border: 1px solid black;\n            background-color: rgb(197, 197, 197);\n            border-radius: 3px;\n        }\n        #bot-squares > .square:hover {\n            border: 4px solid red;\n        }\n        #build-cont > #player-squares > .square:hover {\n            border: 4px solid #5cdb95;\n        }\n    #restart-game {\n        grid-column: 1/3;\n    }\n    .scores {\n        font-family: 'Press Start 2P', cursive;\n        justify-self: center;\n        align-self: center;\n        text-align: center;\n        color: white;\n        font-weight: 500;\n        font-size: 1.2em;\n        text-transform: uppercase;\n    }\n\n\n/* ANIMATIONS\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n#enter-name, #player-prompt { /* Typing effect */\n    opacity: 0%;\n    animation-fill-mode: forwards;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    letter-spacing: .15em; /* Adjust as needed */\n    animation:\n        typing 2.5s steps(30, end),\n        cursor 1.0s step-end infinite;\n    animation-delay: 1.0s;\n}\n#player-prompt {\n    animation-delay: 0s;\n}\nh1 {\n    opacity: 0;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    animation-duration: 1.5s;\n        -webkit-animation-duration: 1.5s;\n        -ms-animation-duration: 1.5s;\n        -moz-animation-duration: 2.0s;\n    animation-timing-function: cubic-bezier();\n        -webkit-animation-timing-function: cubic-bezier();\n}\n#player-name, #start-button, #activity,\n#player-squares, #bot-squares, .scores {\n    opacity: 0;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    animation-duration: 1.2s;\n        -webkit-animation-duration: 1.2s;\n        -ms-animation-duration: 1.2s;\n        -moz-animation-duration: 1.4s;\n    animation-timing-function: cubic-bezier();\n        -webkit-animation-timing-function: cubic-bezier();\n    animation-fill-mode: forwards;\n}\nh1 {\n    animation-delay: 0s;\n}\n#player-squares, #bot-squares {\n    animation-delay: 0.3s;\n}\n#player-name, #start-button, #activity, .scores {\n    animation-delay: 1.4s;\n        -webkit-animation-delay: 1.4s;\n        -ms-animation-delay: 1.4s;\n        -moz-animation-delay: 1.4s;\n}\n.scores {animation-name: slide-up}\n#player-name {animation-name: slide-left}\n#start-button {animation-name: slide-right}\n#activity, #player-squares, #bot-squares {animation-name: grow-in}\nh1 {animation-name: slide-down}\n@keyframes slide-right {\n    0% {\n        opacity: 0%;\n        transform: translateX(-100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translateX(0px);\n        visibility: visible;\n    }\n}\n@keyframes slide-left {\n    0% {\n        opacity: 0%;\n        transform: translateX(100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translateX(0px);\n        visibility: visible;\n    }\n}\n@keyframes slide-down {\n    0% {\n        opacity: 0%;\n        transform: translateY(-100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translate(0px);\n        visibility: visible;\n    }\n}\n@keyframes slide-up {\n    0% {\n        opacity: 0%;\n        transform: translateY(100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translate(0px);\n        visibility: visible;\n    }\n}\n@keyframes fade-right {\n    0% {\n        opacity: 100%;\n        transform: translateX(0);\n        visibility: visible;\n    }\n    100% {\n        opacity: 100%;\n        transform: translateX(100px);\n        visibility: hidden;\n    }\n}\n@keyframes fade-in {\n    0% {\n        opacity: 0%;\n        visibility: hidden;\n    }\n    100% {\n        opacity: 25%;\n        visibility: visible;\n    }\n}\n@keyframes fade-out {\n    0% {\n        opacity: 25%;\n        visibility: hidden;\n    }\n    100% {\n        opacity: 0%;\n        visibility: visible;\n    }\n}\n@keyframes grow-in {\n    0% {\n        scale: 0.8;\n        opacity: 0%;\n        visibility: hidden;\n    }\n    100% {\n        scale: 1.0;\n        opacity: 100%;\n        visibility: visible;\n    }\n}\n@keyframes typing {\n    0% {\n        opacity: 100%;\n        width: 0;\n    }\n    100% {\n        opacity: 100%;\n        width: 100%;\n    }\n}\n@keyframes cursor {\n    0%, 100% { \n        opacity: 100%;\n    }\n    /* 50% {\n        opacity: 100%;\n        border-color: rgb(0, 0, 0);\n    } */\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,iBAAiB,IAAI,2EAA2E;IAChG,kCAAkC,EAAE,eAAe;AACvD;AACA;IACI,SAAS;IACT,UAAU;IACV,kBAAkB,EAAE,kCAAkC;IACtD,yBAAyB;AAC7B;AACA,OAAO,uDAAuD;IAC1D,qBAAqB;IACrB,cAAc;AAClB;AACA,oDAAoD;;;AAGpD;oDACoD;AACpD;IACI,6BAA6B;IAC7B,cAAc;IACd,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,sCAAsC;IACtC,oBAAoB;IACpB,eAAe;IACf,SAAS;IACT,+BAA+B;IAC/B,sCAAsC;IACtC,WAAW;IACX,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,sCAAsC;IACtC,gBAAgB;AACpB;AACA;IACI,sCAAsC;IACtC,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;CACrB,qBAAqB;CACrB,WAAW;IACR,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;CACtB,kBAAkB;IACf,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,oBAAoB;AACxB;AACA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,SAAS;AACV;;AAEA;IACI,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,4BAA4B;IAC5B,mCAAmC;IACnC,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;oDACoD;AACpD;IACI,aAAa;IACb,iCAAiC;IACjC,4BAA4B;IAC5B,mBAAmB;IACnB,qBAAqB;AACzB;IACI;QACI,sCAAsC;QACtC,yBAAyB;QACzB,gBAAgB;QAChB,gBAAgB;QAChB,kBAAkB;QAClB,oBAAoB;QACpB,mBAAmB;QACnB,wBAAwB;QACxB,qBAAqB;QACrB,WAAW;QACX,4BAA4B;QAC5B,2BAA2B;QAC3B,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,aAAa;QACb,uCAAuC;QACvC,oCAAoC;QACpC,QAAQ;QACR,YAAY;IAChB;QACI;YACI,aAAa;YACb,uCAAuC;YACvC,mBAAmB;YACnB,yBAAyB;QAC7B;QACA;YACI,uBAAuB;YACvB,oCAAoC;YACpC,kBAAkB;QACtB;QACA;YACI,qBAAqB;QACzB;QACA;YACI,yBAAyB;QAC7B;IACJ;QACI,gBAAgB;IACpB;IACA;QACI,sCAAsC;QACtC,oBAAoB;QACpB,kBAAkB;QAClB,kBAAkB;QAClB,YAAY;QACZ,gBAAgB;QAChB,gBAAgB;QAChB,yBAAyB;IAC7B;;;AAGJ;oDACoD;;AAEpD,8BAA8B,kBAAkB;IAC5C,WAAW;IACX,6BAA6B;IAC7B,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,qBAAqB,EAAE,qBAAqB;IAC5C;;qCAEiC;IACjC,qBAAqB;AACzB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,6BAA6B;IAC7B,wBAAwB;QACpB,gCAAgC;QAChC,4BAA4B;QAC5B,6BAA6B;IACjC,yCAAyC;QACrC,iDAAiD;AACzD;AACA;;IAEI,UAAU;IACV,kBAAkB;IAClB,6BAA6B;IAC7B,wBAAwB;QACpB,gCAAgC;QAChC,4BAA4B;QAC5B,6BAA6B;IACjC,yCAAyC;QACrC,iDAAiD;IACrD,6BAA6B;AACjC;AACA;IACI,mBAAmB;AACvB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;QACjB,6BAA6B;QAC7B,yBAAyB;QACzB,0BAA0B;AAClC;AACA,SAAS,wBAAwB;AACjC,cAAc,0BAA0B;AACxC,eAAe,2BAA2B;AAC1C,0CAA0C,uBAAuB;AACjE,IAAI,0BAA0B;AAC9B;IACI;QACI,WAAW;QACX,6BAA6B;QAC7B,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,0BAA0B;QAC1B,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,WAAW;QACX,4BAA4B;QAC5B,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,0BAA0B;QAC1B,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,WAAW;QACX,6BAA6B;QAC7B,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,yBAAyB;QACzB,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,WAAW;QACX,4BAA4B;QAC5B,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,yBAAyB;QACzB,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,aAAa;QACb,wBAAwB;QACxB,mBAAmB;IACvB;IACA;QACI,aAAa;QACb,4BAA4B;QAC5B,kBAAkB;IACtB;AACJ;AACA;IACI;QACI,WAAW;QACX,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,YAAY;QACZ,kBAAkB;IACtB;IACA;QACI,WAAW;QACX,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,UAAU;QACV,WAAW;QACX,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,aAAa;QACb,mBAAmB;IACvB;AACJ;AACA;IACI;QACI,aAAa;QACb,QAAQ;IACZ;IACA;QACI,aAAa;QACb,WAAW;IACf;AACJ;AACA;IACI;QACI,aAAa;IACjB;IACA;;;OAGG;AACP","sourcesContent":["@import url(//db.onlinewebfonts.com/c/6c418c270348070b8e5ebbaf78a94917?family=Bombardment+3D);\n@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');\n* {\n    font-family: \"Special Elite\", monospace;\n    color: black;\n    user-select: none;   /* Disables text highlighting. Individually removed later for to-do items */\n    text-rendering: optimizeLegibility; /* For safari */\n}\nbody,html {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden; /* Hides scrollbar across x-axis */\n    background-color: #b9b9b9;\n}\na {    /* Removes default styling for links, and React Links */\n    text-decoration: none;\n    color: inherit;\n}\n/*–––––––––––––––––––––––––––––––––––––––––––––––– */\n\n\n/* LANDING PAGE\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1 {\n    font-family: 'Bombardment 3D';\n    font-size: 5em;\n    font-weight: 100;\n    letter-spacing: 0.1rem;\n}\n#activity {\n    width: 500px;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 1.0em;\n    font-weight: 100;\n    font-family: 'Press Start 2P', cursive;\n    letter-spacing: 0rem;\n    position: fixed;\n    bottom: 0;\n    left: calc(50vw - 250px - 35px);\n    box-shadow: 0 5px 20px rgba(0,0,0,0.3);\n    margin: 5px;\n    padding: 25px;\n    background-color: rgb(255, 255, 255);\n    color: rgb(0, 0, 0);\n    border: 5px double black;\n}\n#enter-name {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 0.9em;\n}\n#player-name {\n    font-family: 'Press Start 2P', cursive;\n    height: 40px;\n    border: 5px double black;\n    border-radius: 7px;\n    font-size: 1.0em;\n    font-weight: 500;\n    letter-spacing: 0.1rem;\n    padding: 10px 20px 10px 20px;\n}\n#start-button, #start-game {\n    font-family: 'bombardment';\n    font-size: 1.1em;\n    font-weight: 100;\n    letter-spacing: 0.2rem;\n    text-align: center;\n\tdisplay: inline-block;\n\tmargin: 5px;\n    padding: 15px;\n    background-color: lightgray;\n    color: rgb(0, 0, 0);\n\tborder-radius: 7px;\n    box-shadow: 0 .2em gray; \n    cursor: pointer;\n}\n#start-game {\n    font-size: 1.4em;\n    height: 70px;\n    width: 250px;\n    padding: 10px 30px 10px 30px;\n    align-self: center;\n    justify-self: center;\n}\n#start-button:active, #start-game:active {\n\tbox-shadow: none;\n\tposition: relative;\n\ttop: .2em;\n}\n\n#outer-cont {\n    height: 100vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n#landing-cont {\n    display: grid;\n    grid-template-columns: 400px;\n    grid-template-rows: repeat(4, 70px);\n    gap: 10px;\n    justify-items: center;\n    align-items: center;\n}\n\n/* BUILD YOUR BOARD/GAME LOOP\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n#build-cont, #player-cont, #bot-cont {\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    grid-template-columns: 500px;\n    align-items: center;\n    justify-items: center;\n}\n    .prompts {\n        font-family: 'Press Start 2P', cursive;\n        text-transform: uppercase;\n        font-size: 0.8em;\n        font-weight: 100;\n        align-self: center;\n        justify-self: center;\n        color: rgb(0, 0, 0);\n        border: 5px double black;\n        display: inline-block;\n        margin: 5px;\n        padding: 20px 12px 20px 12px;\n        background-color: lightgray;\n        color: rgb(0, 0, 0);\n        box-shadow: 0 .2em gray; \n    }\n    #player-squares, #bot-squares {\n        display: grid;\n        grid-template-columns: repeat(10, 30px);\n        grid-template-rows: repeat(10, 30px);\n        gap: 3px;\n        margin: 30px;\n    }\n        #player-squares, #bot-squares {\n            padding: 17px;\n            box-shadow: 0 15px 30px rgba(0,0,0,0.3);\n            border-radius: 10px;\n            background-color: #C4A484;\n        }\n        .square {\n            border: 1px solid black;\n            background-color: rgb(197, 197, 197);\n            border-radius: 3px;\n        }\n        #bot-squares > .square:hover {\n            border: 4px solid red;\n        }\n        #build-cont > #player-squares > .square:hover {\n            border: 4px solid #5cdb95;\n        }\n    #restart-game {\n        grid-column: 1/3;\n    }\n    .scores {\n        font-family: 'Press Start 2P', cursive;\n        justify-self: center;\n        align-self: center;\n        text-align: center;\n        color: white;\n        font-weight: 500;\n        font-size: 1.2em;\n        text-transform: uppercase;\n    }\n\n\n/* ANIMATIONS\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n#enter-name, #player-prompt { /* Typing effect */\n    opacity: 0%;\n    animation-fill-mode: forwards;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    letter-spacing: .15em; /* Adjust as needed */\n    animation:\n        typing 2.5s steps(30, end),\n        cursor 1.0s step-end infinite;\n    animation-delay: 1.0s;\n}\n#player-prompt {\n    animation-delay: 0s;\n}\nh1 {\n    opacity: 0;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    animation-duration: 1.5s;\n        -webkit-animation-duration: 1.5s;\n        -ms-animation-duration: 1.5s;\n        -moz-animation-duration: 2.0s;\n    animation-timing-function: cubic-bezier();\n        -webkit-animation-timing-function: cubic-bezier();\n}\n#player-name, #start-button, #activity,\n#player-squares, #bot-squares, .scores {\n    opacity: 0;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    animation-duration: 1.2s;\n        -webkit-animation-duration: 1.2s;\n        -ms-animation-duration: 1.2s;\n        -moz-animation-duration: 1.4s;\n    animation-timing-function: cubic-bezier();\n        -webkit-animation-timing-function: cubic-bezier();\n    animation-fill-mode: forwards;\n}\nh1 {\n    animation-delay: 0s;\n}\n#player-squares, #bot-squares {\n    animation-delay: 0.3s;\n}\n#player-name, #start-button, #activity, .scores {\n    animation-delay: 1.4s;\n        -webkit-animation-delay: 1.4s;\n        -ms-animation-delay: 1.4s;\n        -moz-animation-delay: 1.4s;\n}\n.scores {animation-name: slide-up}\n#player-name {animation-name: slide-left}\n#start-button {animation-name: slide-right}\n#activity, #player-squares, #bot-squares {animation-name: grow-in}\nh1 {animation-name: slide-down}\n@keyframes slide-right {\n    0% {\n        opacity: 0%;\n        transform: translateX(-100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translateX(0px);\n        visibility: visible;\n    }\n}\n@keyframes slide-left {\n    0% {\n        opacity: 0%;\n        transform: translateX(100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translateX(0px);\n        visibility: visible;\n    }\n}\n@keyframes slide-down {\n    0% {\n        opacity: 0%;\n        transform: translateY(-100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translate(0px);\n        visibility: visible;\n    }\n}\n@keyframes slide-up {\n    0% {\n        opacity: 0%;\n        transform: translateY(100px);\n        visibility: hidden;\n    }\n    100% {\n        opacity: 100%;\n        transform: translate(0px);\n        visibility: visible;\n    }\n}\n@keyframes fade-right {\n    0% {\n        opacity: 100%;\n        transform: translateX(0);\n        visibility: visible;\n    }\n    100% {\n        opacity: 100%;\n        transform: translateX(100px);\n        visibility: hidden;\n    }\n}\n@keyframes fade-in {\n    0% {\n        opacity: 0%;\n        visibility: hidden;\n    }\n    100% {\n        opacity: 25%;\n        visibility: visible;\n    }\n}\n@keyframes fade-out {\n    0% {\n        opacity: 25%;\n        visibility: hidden;\n    }\n    100% {\n        opacity: 0%;\n        visibility: visible;\n    }\n}\n@keyframes grow-in {\n    0% {\n        scale: 0.8;\n        opacity: 0%;\n        visibility: hidden;\n    }\n    100% {\n        scale: 1.0;\n        opacity: 100%;\n        visibility: visible;\n    }\n}\n@keyframes typing {\n    0% {\n        opacity: 100%;\n        width: 0;\n    }\n    100% {\n        opacity: 100%;\n        width: 100%;\n    }\n}\n@keyframes cursor {\n    0%, 100% { \n        opacity: 100%;\n    }\n    /* 50% {\n        opacity: 100%;\n        border-color: rgb(0, 0, 0);\n    } */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/factoryBoard.js":
/*!***************************************!*\
  !*** ./src/factories/factoryBoard.js ***!
  \***************************************/
/***/ ((module) => {

/* eslint-disable semi */
function factoryBoard (boardArr) {
  return {
    boardArr,
    reset () {
      for (let i = 0; i < 10; i++) {
        boardArr.push([])
        for (let j = 0; j < 10; j++) {
          boardArr[i].push([]);
        }
      }
      return boardArr
    },
    placeShip (ship, x, y, square, shipIdx) {
      if (ship.length + y < 11) { // If the ship will not be out of bounds
        // Place ship in array
        for (let k = 0; k < ship.length; k++) {
          this.boardArr[x][y + k] = ship;
        }

        // Update DOM to show ship
        for (let j = 0; j < ship.length; j++) {
          square.style.backgroundColor = '#002066';
          square = square.nextSibling;
        }

        // Increment shipIdx, so we know to place the next ship
        shipIdx[0] = shipIdx[0] + 1;
        return true
      } else {
        console.log('Ship will not fit! Try again.')
        document.getElementById('activity').innerHTML = 'Ship will not fit! Try again.';
        return false
      }
    },
    receiveAttack (x, y, square) {
      if (this.boardArr[x][y].length === 0) { // IF MISSED
        this.boardArr[x][y] = 'MISS';
        square.style.backgroundColor = '#05386b';
        return false
      } else if (this.boardArr[x][y].length !== 0) { // IF HIT
        this.boardArr[x][y].hit = this.boardArr[x][y].hit + 1;
        square.style.backgroundColor = 'red';
        return true
      }
    }
  }
}

module.exports = factoryBoard


/***/ }),

/***/ "./src/factories/factoryPlayer.js":
/*!****************************************!*\
  !*** ./src/factories/factoryPlayer.js ***!
  \****************************************/
/***/ ((module) => {

/* eslint-disable semi */
function factoryPlayer (name, gameBoard) {
  return {
    name,
    gameBoard
  }
}

module.exports = factoryPlayer;


/***/ }),

/***/ "./src/factories/factoryShip.js":
/*!**************************************!*\
  !*** ./src/factories/factoryShip.js ***!
  \**************************************/
/***/ ((module) => {

/* eslint-disable semi */
function factoryShip (length, sunk, name, hit) {
  return {
    length,
    sunk,
    name,
    hit,
    isSunk (scoreDiv) {
      if (this.hit === this.length) {
        console.log(this.name.toUpperCase() + ' SUNK!');
        document.getElementById('activity').innerHTML = this.name.toUpperCase() + ' SUNK!';
        updateScores(scoreDiv);
        return true
      } else if (this.hit !== this.length) {
        console.log(this.hit + '/' + this.length)
        return false
      }
    }
  }
}

function updateScores (scoreDiv) {
  const score = parseInt(scoreDiv.innerHTML.split('')[scoreDiv.innerHTML.length - 1]) + 1;
  scoreDiv.innerHTML = scoreDiv.innerHTML.slice(0, -1) + score; // Slice off the last score
  if (score === 7) {
    const winner = scoreDiv.id.split('-')[0].toUpperCase();
    alert('THE ' + winner + ' WINS!');
    // Create a RESTART GAME button
    const restartGame = document.createElement('input');
    restartGame.id = 'restart-game';
    restartGame.type = 'button';
    restartGame.value = 'RESTART GAME';
    restartGame.addEventListener('click', () => { location.reload() });
    document.getElementById('outer-cont').appendChild(restartGame);
  }
}

module.exports = factoryShip;


/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((module) => {

/* eslint-disable semi */

function gameLoop (p1, p2, idxToCoords) {
  console.log('running gameLoop...');
  // Extract elements
  const squares = document.getElementById('bot-squares').childNodes; // Select all box classes
  let idx = 0; // Create an index to keep track of square numbers
  // Add an eventlistener to each square, for fired shots
  squares.forEach(square => {
    square.addEventListener('click', playerFireShot.bind(this, square, p1, p2, idx, idxToCoords));
    idx += 1;
  });
}

function playerFireShot (square, p1, p2, idx, idxToCoords) {
  // Player fires a shot, update the bots object/DOM
  const x = idxToCoords(idx)[0];
  const y = idxToCoords(idx)[1];
  // The player misses
  if (square.style.backgroundColor !== 'white') {
    alert('Already fired here. Try again.');
  // The player has hit a shot
  } else {
    const hitShip = p2.gameBoard.receiveAttack(x, y, square); // Make bot gameboard receive attack
    try { // Try checking if the ship has sunk
      const scoreDiv = document.getElementById('player-score');
      p2.gameBoard.boardArr[x][y].isSunk(scoreDiv);
    } catch (error) {};
    // Let the player repeat the turn once more (if hit a ship_)
    if (hitShip === true) { return } // break the current loop
  }
  botFireShot(p1, idxToCoords);
}

function botFireShot (p1, idxToCoords) {
  // Bot fires a shot, update the players object/DOM
  const idx = Math.floor(Math.random() * 100);
  const x = idxToCoords(idx)[0];
  const y = idxToCoords(idx)[1];
  const squares = document.getElementById('player-squares').childNodes;
  if (squares[idx].style.backgroundColor !== 'white') {
    console.log('Bot made an illegal move. Trying again.');
    document.getElementById('activity').innerHTML = 'Bot made an illegal move. Trying again.';
    botFireShot(p1, idxToCoords);
  } else {
    const hitShip = p1.gameBoard.receiveAttack(x, y, squares[idx]);
    try { // Try checking if the ship has sunk (REFACTOR LATER)
      const scoreDiv = document.getElementById('bot-score');
      p1.gameBoard.boardArr[x][y].isSunk(scoreDiv);
    } catch (error) {};
    // Let the player repeat the turn once more (if hit a ship_)
    if (hitShip === true) { return } // break the current loop
  }
}

module.exports = gameLoop;


/***/ }),

/***/ "./src/initialiseShips.js":
/*!********************************!*\
  !*** ./src/initialiseShips.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable semi */
const factoryShip = __webpack_require__(/*! ./factories/factoryShip */ "./src/factories/factoryShip.js");

const playerCarrier = factoryShip(5, false, 'carrier', 0);
const playerBattleship = factoryShip(4, false, 'battleship', 0);
const playerCruiser = factoryShip(3, false, 'cruiser', 0);
const playerDestroyerOne = factoryShip(2, false, 'first destroyer', 0);
const playerDestroyerTwo = factoryShip(2, false, 'second destroyer', 0);
const playerSubOne = factoryShip(1, false, 'first sub', 0);
const playerSubTwo = factoryShip(1, false, 'second sub', 0);

const botCarrier = factoryShip(5, false, 'carrier', 0);
const botBattleship = factoryShip(4, false, 'battleship', 0);
const botCruiser = factoryShip(3, false, 'cruiser', false);
const botDestroyerOne = factoryShip(2, false, 'first destroyer', 0);
const botDestroyerTwo = factoryShip(2, false, 'second destroyer', 0);
const botSubOne = factoryShip(1, false, 'first sub', 0);
const botSubTwo = factoryShip(1, false, 'second sub', 0);

const playerShipArr = [playerCarrier, playerBattleship,
  playerCruiser, playerDestroyerOne, playerDestroyerTwo,
  playerSubOne, playerSubTwo]
const botShipArr = [botCarrier, botBattleship,
  botCruiser, botDestroyerOne, botDestroyerTwo,
  botSubOne, botSubTwo]

module.exports = [playerShipArr, botShipArr];


/***/ }),

/***/ "./src/setGrid.js":
/*!************************!*\
  !*** ./src/setGrid.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ships = __webpack_require__(/*! ./initialiseShips */ "./src/initialiseShips.js");
const botShips = ships[1];

const setGrid = [
  [
    [],
    botShips[0],
    botShips[0],
    botShips[0],
    botShips[0],
    botShips[0],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    botShips[1],
    botShips[1],
    botShips[1],
    botShips[1],
    [],
    [],
    [],
    []
  ],
  [
    botShips[2],
    botShips[2],
    botShips[2],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    botShips[3],
    botShips[3],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    botShips[4],
    botShips[4],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    botShips[5],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    botShips[6],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]
]

module.exports = setGrid


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/buildDOM.js ***!
  \*************************/
/* eslint-disable semi */

__webpack_require__(/*! ./style.css */ "./src/style.css");
const factoryBoard = __webpack_require__(/*! ./factories/factoryBoard */ "./src/factories/factoryBoard.js");
const factoryPlayer = __webpack_require__(/*! ./factories/factoryPlayer */ "./src/factories/factoryPlayer.js");
const shipArr = __webpack_require__(/*! ./initialiseShips */ "./src/initialiseShips.js");
const playerShipArr = shipArr[0];
const gameLoop = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
console.clear();
console.log('-----------');

function idxToCoords (idx) { // Function to convert an index, to an x,y coord
  if (idx < 10) { // You are in the first row
    const x = 0;
    const y = idx;
    return [parseInt(x), parseInt(y)];
  } else if (idx >= 10) { // Otherwise split the numbers
    const x = idx.toString()[0];
    const y = idx.toString()[1];
    return [parseInt(x), parseInt(y)];
  }
}

/// / PART 1: INITIALISE PLAYERS AND BOARDS ////////////////

// Player 1 & Bot Initialise
function randomiseBoard (p2) {
  const setGrid = __webpack_require__(/*! ./setGrid */ "./src/setGrid.js");
  p2.gameBoard.boardArr = setGrid;
}

const boardPlayer = factoryBoard([]);
const boardBot = factoryBoard([]);
const player1 = factoryPlayer('placeholder', boardPlayer);
const player2 = factoryPlayer('computer bot', boardBot);
player1.gameBoard.reset(); // Create an empty 10x10 array
player2.gameBoard.reset(); // Create an empty 10x10 array
randomiseBoard(player2); // Randomise the bots board

/// / PART 2: LANDING PAGE //// ///////////////////////////

// Add START GAME button logic
const wipeLanding = () => { // Initialise eventListener arrow function
  const playerName = document.getElementById('player-name').value; // Extract Player Name
  console.log('playerName: ' + playerName);
  document.getElementById('landing-cont').remove(); // Wipe Landing Page
  player1.name = playerName.toUpperCase(); // Save Player names
  buildBoardDOM(); // Build the next page
}
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', wipeLanding);

/// / PART 3: BUILD YOUR BOARD //// //////////////////////

// Append DOM items
function buildBoardDOM () {
  const buildCont = document.createElement('div'); // Build Board Container
  const promptBuild = document.createElement('div'); // Greet Player personally
  const squareCont = document.createElement('div'); // Build the grid
  buildCont.id = 'build-cont';
  promptBuild.id = 'player-prompt';
  promptBuild.className = 'prompts';
  squareCont.id = 'player-squares';
  promptBuild.innerHTML = player1.name + ', PLACE YOUR CARRIER!';
  document.getElementById('outer-cont').appendChild(buildCont);
  buildCont.appendChild(promptBuild);
  buildCont.appendChild(squareCont);

  // Create the grid squares
  for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('click', clickedSquare.bind(this, i, square, shipIdx));
    squareCont.appendChild(square);
  }
}

// Control Ship Placement
const shipIdx = [0];
function clickedSquare (i, square, shipIdx) {
  // Check if placed all ships or not
  if (shipIdx[0] === 6) {
    document.getElementById('player-prompt').innerHTML = 'Done!';

    // Place a new button element below grid to start game
    const startGame = document.createElement('input');
    const buildCont = document.getElementById('build-cont')
    startGame.id = 'start-game';
    startGame.type = 'button';
    startGame.value = 'START GAME';
    startGame.addEventListener('click', wipeBuilderBoard);
    buildCont.appendChild(startGame);
  }
  // Convert idx to x, y coords:
  const x = idxToCoords(i)[0];
  const y = idxToCoords(i)[1];

  // Place the ship on the players board
  const ship = playerShipArr[shipIdx[0]];
  const placedShip = boardPlayer.placeShip(ship, x, y, square, shipIdx);

  // Update the DOM message with carrier name
  if (placedShip === true) {
    const nextShip = playerShipArr[shipIdx[0]];
    const promptBuild = document.getElementById('player-prompt');
    promptBuild.innerHTML = 'NOW PLACE YOUR ' + nextShip.name.toUpperCase() + '!';
  }
}

/// / PART 4: SHOW GAMEBOARD FOR PLAY //// //////////////////////

const wipeBuilderBoard = () => {
  // Remove start-game button
  document.getElementById('start-game').remove();

  // Reset each square in the DOM
  const squares = document.querySelectorAll('.square'); // Select all box classes
  squares.forEach(square => {
    square.style['background-color'] = 'white';
  });

  buildGameBoards();
}

function buildGameBoards () {
  // Duplicate grid
  const outerCont = document.getElementById('outer-cont');
  const playerCont = document.getElementById('build-cont');
  const playerPrompt = document.getElementById('player-prompt');
  const botCont = playerCont.cloneNode(true);
  const botPrompt = botCont.firstChild;
  playerCont.id = 'player-cont';
  botCont.id = 'bot-cont';
  outerCont.appendChild(botCont);

  // Adjust grid styling on outer container, to make grids side-by-side
  outerCont.style['grid-template-columns'] = 'repeat(2, 1fr)';
  outerCont.style['grid-template-rows'] = '1fr 100px';

  // Rename bot's element children, as they were duplicated from the player
  botPrompt.id = 'bot-prompt'
  botCont.firstChild.nextSibling.id = 'bot-squares';

  // Add a new div to hold scores for each grid
  const playerScore = document.createElement('div');
  const botScore = document.createElement('div');
  playerScore.id = 'player-score';
  botScore.id = 'bot-score';
  playerScore.className = 'scores';
  botScore.className = 'scores';
  playerScore.innerHTML = 'Your Score: 0';
  botScore.innerHTML = 'Bot Score: 0';
  playerCont.appendChild(playerScore);
  botCont.appendChild(botScore);

  // Change prompts
  playerPrompt.innerHTML = 'FRIENDLY WATERS';
  botPrompt.innerHTML = 'ENEMY WATERS';

  gameLoop(player1, player2, idxToCoords) // Run the game loop
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map