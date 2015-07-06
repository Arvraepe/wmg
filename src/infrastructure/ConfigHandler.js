var fs = require('fs');
var _ = require('underscore');

var file = './config';

function getConfigSync () {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function getConfig (callback) {

    fs.readFile(file, "utf-8", function (err, data) {
        var config = data ? JSON.parse(data) : {};
        callback(err, config);
    });
}

function writeConfig (decorations, callback) {

    getConfig(function (readError, config) {

        _.keys(decorations).forEach(function (key) {
            config[key] = decorations[key];
        });

        fs.writeFile(file, JSON.stringify(config), "utf-8", function (writeError){
            callback(writeError);
        });
    });
}

exports.readConfig = getConfig;
exports.writeConfig = writeConfig;
exports.readConfigSync = getConfigSync;
