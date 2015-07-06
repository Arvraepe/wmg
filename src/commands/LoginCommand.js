var PromptHandler = require('../infrastructure/PromptHandler.js');
var AuthenticationService = require('../service/AuthenticationService.js');
var ConfigHandler = require('../infrastructure/ConfigHandler.js');

exports.execute = function (argv) {
    PromptHandler.askLoginInfo(function (info) {
        AuthenticationService.login(info, function (result) {
//            console.log(result);
            if (result.success) {
                ConfigHandler.writeConfig({ session: result.data.session }, function (err) {
                    if (err) { console.error('Could not write to file, ', err); }
                    else console.log('You are successfully authenticated and can start playing, have fun!');
                    process.exit(0);
                });
            } else {
                console.error('Your login attempt failed. Message: ', result.messages[0].message);
                process.exit(0);
            }
        });
    });
};
