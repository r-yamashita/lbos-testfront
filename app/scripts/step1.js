// step1.js
var step1 = {};

step1.vm = (function() {
    var vm = {};
    vm.registerpageGet = function() {
        return m.request({method: 'GET', url: "http://localhost:9001/contract/registerpage/get/10001"});
    };
    vm.init = function() {
        vm.pageInfo = vm.registerpageGet();
    };
    
    return vm;
}());

//step1.page = step1.vm.pageInfo;

step1.controller = function() {
    step1.vm.init();
};

step1.view = function() {
    var json = step1.vm.pageInfo;
    return m("html", [
        m("body", [
            m("div", json)
        ])
    ]);
};

m.mount(document, {controller: step1.controller, view: step1.view});
