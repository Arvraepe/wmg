var Service = require('../infrastructure/ServiceHandler.js');

function register (config) {
    Service.request({
        noAuth: true,
        method: 'post',
        path: '/register',
        body: { username: config.info.username, password: config.info.password },
        onSuccess: config.callback
    });
}

function login (config) {
    Service.request({
        noAuth: true,
        method: 'post',
        path: '/authenticate',
        body: { username: config.info.username, password: config.info.password },
        onSuccess: config.onSuccess,
        onFail: config.onFail,
        onError: config.onError
    });
}

exports.register = register;
exports.login = login;