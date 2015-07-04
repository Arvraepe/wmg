var PromptHandler = require('../infrastructure/PromptHandler.js');
var AuthenticationService = require('../service/AuthenticationService.js');

exports.execute = function (argv) {
    PromptHandler.askLoginInfo(function (info) {
        AuthenticationService.login(info, function (result) {
            if (result.success) {
                console.log('You are successfully authenticated and can start playing, have fun!');
            } else {
                console.error('Your login attempt failed. Message: ', result.messages[0].message);
            }
            process.exit(0);
        });
    });
};
