var Service = require('../infrastructure/ServiceHandler.js');

function register (info, callback) {
    Service.JsonClient.post('/register', { username: info.username, password: info.password }, function (err, req, res, obj){
        if (err) { console.error(err); } else { callback (obj); }
    });
}

function login (info, callback) {
    Service.JsonClient.post('/authenticate', { username: info.username, password: info.password }, function (err, req, res, obj){
        if (err) { console.error(err); } else { callback (obj); }
    });
}

exports.register = register;
exports.login = login;