var restify = require('restify');
var _ = require('underscore');

var C = restify.createJsonClient({ url: 'http://0.0.0.0:8080' });
var Config = require('../infrastructure/ConfigHandler').readConfigSync();

exports.request = function (config) {
    if (Config.session && !config.noAuth) {
        if (config.params) { config.params.session = Config.session; }
        else { config.params = { session: Config.session }; }
    }

    var paramStr = _.keys(config.params).map(function (key) {  }).join('&');
    var path = config.path + ( paramStr ? '?'+paramStr : '' );
    var callback = function (err, req, res, obj) {
        if (err) { if (config.onError) config.onError(); else console.error('Something was wrong with the connection ', err); }
        else {
            if (config.onSuccess) config.onSuccess(obj);
        }
    };

//    console.log('Sending request to: ', path, config.method, config.body);
    if (config.method === 'post')
        C.post(path, config.body, callback);

    else if (config.method === 'get')
        C.get(path, callback);

};
