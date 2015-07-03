var Service = require('../infrastructure/ServiceHandler.js');

function register (info, callback) {
    Service.JsonClient.post('/register', { username: info.username, password: info.password }, function (err, req, res, obj){
        if (err) { console.error(err); } else { callback (obj); }
    });
}

function login () {
    C.post('/authenticate', { username: 'testuser', password: 'test' }, function (err, req, res, obj){
        if (err) { console.error(err); } else {
            if (obj.success) {
                console.log('You are succesfully authenticated with the application and can start playing, have fun!');
            } else {
                console.error('You could not log in. Message: ', obj.messages[0].message);
            }
        }
    });
}

exports.register = register;
exports.login = login;