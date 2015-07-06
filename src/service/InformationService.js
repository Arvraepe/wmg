var Service = require('../infrastructure/ServiceHandler.js');
var Config = require('../infrastructure/ConfigHandler').readConfigSync();

function whoami (callback) {
    Service.JsonClient.get('/info/whoami?session='+Config.session, function (err, req, res, obj){
        if (err) { console.error(err); } else { callback (obj); }
    });
}

exports.whoami = whoami;
