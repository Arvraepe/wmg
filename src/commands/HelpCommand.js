var prompt = require('prompt');

exports.execute = function (argv) {
    console.log('Welcome! The help is here for you!');
    console.log('wmg new'.green, ' allows you to create a new account in wmg');
    console.log('wmg login'.green, ' allows you to login to an existing account in wmg');
    console.log('wmg whoami'.green, ' shows you the current logged in user');
    console.log('wmg quest list'.green, ' gives you a list of available quests');
    console.log('wmg quest last'.green, ' gives you the last quest you\'ve completed');
    console.log('wmg quest start {id}'.green, ' starts a quest, only possible if not already on a quest');
    console.log('wmg quest cancel'.green, ' cancels your current quest, you\'ll loose all the goodies');
    process.exit(0);
};
