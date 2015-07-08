var Service = require('../infrastructure/ServiceHandler.js');

function whoami (config) {
    Service.request({
        method: 'get',
        path: '/info/whoami',
        onSuccess: config.onSuccess,
        onFail: config.onFail
    });
}

function status (config) {
    Service.request({
        method: 'get',
        path: '/info/status',
        onSuccess: config.onSuccess,
        onFail: config.onFail
    });
}

exports.whoami = whoami;
exports.status = status;
