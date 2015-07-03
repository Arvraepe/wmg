var restify = require('restify');
var C = restify.createJsonClient({ url: 'http://0.0.0.0:8080' });

exports.JsonClient = C;
