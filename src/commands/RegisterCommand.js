var PromptHandler = require('../infrastructure/PromptHandler.js');
var AuthenticationService = require('../service/AuthenticationService.js');

exports.execute = function (argv) {
    PromptHandler.askRegisterInfo(function (info) {
        if (info.password === info.retypePassword) {
            AuthenticationService.register(info, function (result) {
                if (result.success) {
                    console.log('You successfully created a new account, you can now use wmg login to connect to your account');
                } else {
                    console.error('Your account could not be created. Message: ', result.messages[0].message);
                }
            });
        }
    });
};
