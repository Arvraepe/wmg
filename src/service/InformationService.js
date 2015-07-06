var Service = require('../infrastructure/ServiceHandler.js');

function whoami (callback) {
    Service.request({
        method: 'get',
        path: '/info/whoami',
        onSuccess: callback
    });
}

exports.whoami = whoami;
