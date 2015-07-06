var InformationService = require('../service/InformationService.js');

exports.execute = function (argv) {
    InformationService.whoami(function (data) {
        console.log('Current logged in user: ', data.you.username);
        process.exit(0);
    });
};
