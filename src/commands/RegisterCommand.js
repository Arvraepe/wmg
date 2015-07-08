var PromptHandler = require('../infrastructure/PromptHandler.js');
var AuthenticationService = require('../service/AuthenticationService.js');

exports.execute = function (argv) {
    PromptHandler.askRegisterInfo(function (info) {
        if (info.password === info.retypePassword) {

            AuthenticationService.register({
                info: info,
                onSuccess: function (data) { console.log('You successfully created a new account, you can now use wmg login to connect to your account'); },
                onFail: function (messages) { console.error('Your account could not be created. Message: ', messages[0].message); }
            });

        } else {
            console.log('The passwords you provided didn\'t match, please try again.');
        }
    });
};
