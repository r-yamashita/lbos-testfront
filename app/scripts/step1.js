// step1.js
'use strict';
//import m from 'mithril';

var step1 = {};
var pageInfo = m.prop([]);
step1.inputName = m.prop('');
step1.inputAddress = m.prop('');
step1.inputTel = m.prop('');
step1.inputBirthday = m.prop('');
step1.inputSex = m.prop('');

step1.vm = (function() {
    var vm = {};
    vm.registerpageGet = function(code) {
        pageInfo = m.request({
            method: 'GET', 
            url: "http://localhost:9001/contract/registerpage/get/" + code,
        }).then(function(json){
            if (json.result !== undefined && json.result.status !== '200') {
                m.route('/?mode=error');
            }
            return json;
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

var divInputBox = function(description, required, param) {
    return m('div', [
        m('span', description),
        m('input[type=text]', {value: param(), onchange: m.withAttr('value', param), style : {display : required ? 'inline' : 'none'}}),
        m('.no-required', {style: {display: !required ? 'inline' : 'none'}}, '入力なし'),
    ]);
}

step1.view = function() {
    var json = pageInfo();
    console.log(json);
    return m("div", [
        m('h1', 'STEP1 入力画面'),
        m('hr'),
        m('div', [
            m('span', 'キャンペーン名：'),
            m('.contents-text', json.privilege.label),
        ]),
        m('div', [
            m('span', 'キャンペーン内容：'),
            m('.contents-text', json.privilege.text),
        ]),
        m('hr'),
        divInputBox('姓名：', json.required_item.name, step1.inputName),
        divInputBox('住所：', json.required_item.address, step1.inputAddress),
        divInputBox('電話番号：', json.required_item.tel, step1.inputTel),
        divInputBox('誕生日：', json.required_item.birthday, step1.inputBirthday),
        divInputBox('性別：', json.required_item.sex, step1.inputSex)
    ]);
};

//m.mount(document, {controller: step1.controller, view: step1.view});
