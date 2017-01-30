'use strict';

var start = {};

start.vm = (function() {
    var vm = {};
    
    vm.scenarioCode = m.prop("");
    vm.mode = m.prop("");
    
    vm.init = function(mode) {
        vm.scenarioCode("");
        vm.mode(mode);
    }
    vm.submit = function() {
        var code = vm.scenarioCode();
        if (code !== "") {
            var route = "/step1/" + code;
            console.log('submit:' + route);
            m.route(route);
        }
    };
    
    return vm;
}());
start.controller = function () {
    var mode = m.route.param('mode');
    start.vm.init(mode);
};
start.view = function (controller) {
    return [
        m('h1', 'LBOS受注テスト'),
        m('.error-msg', 
        {style: {display: start.vm.mode() === 'error' ? 'block' : 'none'}}, 
        '受注シナリオコードが不正です'),
        m('div', [
            m('span', '受注シナリオコード: '),
            m('input[type=text]', {value: start.vm.scenarioCode(), onchange: m.withAttr('value', start.vm.scenarioCode)}),
            m('button', {onclick: start.vm.submit}, ['開始'])
        ])
    ];
};



