var prompt = require('prompt');
    prompt.message = "wmg asks ".green;

var RegisterSchema = require('../schemas/RegisterSchema.js').schema;
var LoginSchema = require('../schemas/LoginSchema.js').schema;

function askRegisterInfo (callback) {
    prompt.get(RegisterSchema, function (err, result) { callback(result); });
}

function askLoginInfo (callback) {
    prompt.get(LoginSchema, function (err, result) { callback(result); });
}

exports.askRegisterInfo = askRegisterInfo;
exports.askLoginInfo = askLoginInfo;
