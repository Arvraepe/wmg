var restify = require('restify');
var _ = require('underscore');

var Config = require('../infrastructure/ConfigHandler').readConfigSync();
var C = restify.createJsonClient({ url: 'http://' + (Config.server || '0.0.0.0:8080') });

exports.request = function (config) {
    if (Config.session && !config.noAuth) {
        if (config.params) { config.params.session = Config.session; }
        else { config.params = { session: Config.session }; }
    }

    var paramStr = _.keys(config.params).map(function (key) { return key + "=" + config.params[key]; }).join('&');

    var path = config.path + ( paramStr ? '?'+paramStr : '' );
    var callback = function (err, req, res, obj) {
        if (err) { if (config.onError) config.onError(); else console.error('Something was wrong with the connection ', err); }
        else {
            if (obj.success && config.onSuccess) config.onSuccess(obj.data);
            if (!obj.success && config.onFail) config.onFail(obj.messages);
            else if (!obj.success) {
                console.log (
                    obj.messages.map(function (message){ return message.level + ': ' + message.message; }).join(',')
                );
            }
        }
    };

//    console.log('Sending request to: ', path, config.method, config.body);
    if (config.method === 'post')
        C.post(path, config.body, callback);

    else if (config.method === 'get')
        C.get(path, callback);

};
