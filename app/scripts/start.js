'use strict';

var start = {};

start.vm = (function() {
    var vm = {};
    vm.scenarioCode = m.prop("");
    vm.init = function() {
        vm.scenarioCode("");
    }
    vm.submit = function() {
        var code = vm.scenarioCode();
        console.log("A:" + code);
        if (code !== "") {
            var route = "/step1/" + code;
            console.log('submit:' + route);
            m.route(route);
        }
    };
    
    return vm;
}());
start.controller = function () {
    start.vm.init();
};
start.view = function (controller) {
    return [
        m('h1', 'TOP'),
        m('div', [
            m('span', 'シナリオコード: '),
            m('input[type=text]', {value: start.vm.scenarioCode(), onchange: m.withAttr('value', start.vm.scenarioCode)}),
            m('button', {onclick: start.vm.submit}, ['開始'])
        ])
    ];
};



