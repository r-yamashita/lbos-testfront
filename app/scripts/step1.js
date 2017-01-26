// step1.js
'use strict';
//import m from 'mithril';

var step1 = {};
var pageInfo = m.prop([]);

step1.vm = (function() {
    var vm = {};
    vm.registerpageGet = function(code) {
        pageInfo = m.request({
            method: 'GET', 
            url: "http://localhost:9001/contract/registerpage/get/" + code,
        }).then(function(json){
            pageInfo = json;
        });
    };
    vm.init = function(code) {
        vm.pageInfo = vm.registerpageGet(code);
    };
    
    return vm;
}());

step1.controller = function() {
    var code = m.route.param('scenarioCode');
    step1.vm.init(code);
};

step1.view = function() {
    var json = pageInfo;
    return m("html", [
        m("body", [
            m("div", json)
        ])
    ]);
};

//m.mount(document, {controller: step1.controller, view: step1.view});
