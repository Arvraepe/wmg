var InformationService = require('../service/InformationService.js');

exports.execute = function (argv) {
    InformationService.whoami({
        onSuccess: function (data) {
            console.log('Current logged in user: ', data.username);
            process.exit(0);
        }
    });
};
