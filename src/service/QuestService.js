var Service = require('../infrastructure/ServiceHandler.js');

function last (callback) {
    Service.request({
        method: 'get',
        path: '/quest/last',
        onSuccess: callback
    });
}

function list (config) {
    Service.request({
        method: 'get',
        path: '/quest/list',
        onSuccess: config.onSuccess
    });
}

function start (config) {
    Service.request({
        method: 'post',
        path: '/quest/start',
        body: { inputId: config.inputId },
        onSuccess: config.onSuccess
    });
}

function cancel (id, callback) {
    Service.request({
        method: 'post',
        path: '/quest/cancel',
        body: { id: id },
        onSuccess: callback
    });
}

exports.last = last;
exports.list = list;
exports.start = start;
exports.cancel = cancel;
