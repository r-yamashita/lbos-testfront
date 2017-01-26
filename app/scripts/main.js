// main.js
'use strict';

m.route.mode = "hash";

m.route(document.querySelector('#root'), "/", {
    "/": start,
    "/step1/:scenarioCode": step1,
});

//m.mount(document);
