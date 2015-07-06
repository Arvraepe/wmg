var prompt = require('prompt');

exports.execute = function (argv) {
    console.log('Welcome! The help is here for you!');
    console.log('wmg new'.green, ' allows you to create a new account in wmg');
    console.log('wmg login'.green, ' allows you to login to an existing account in wmg');
    console.log('wmg whoami'.green, ' shows you the current logged in user');
    process.exit(0);
};
