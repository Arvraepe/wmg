var Service = require('../infrastructure/ServiceHandler.js');

function register (info, callback) {
    Service.request({
        noAuth: true,
        method: 'post',
        path: '/register',
        body: { username: info.username, password: info.password },
        onSuccess: callback
    });
}

function login (info, callback) {
    Service.request({
        noAuth: true,
        method: 'post',
        path: '/authenticate',
        body: { username: info.username, password: info.password },
        onSuccess: callback
    });
}

exports.register = register;
exports.login = login;