#! /usr/bin/env node
var prompt = require('prompt');
var fs = require('fs');

var config = fs.readFile('./config', "utf-8", function (err, data) {

    var config = data ? JSON.parse(data) : {};

    var argv = process.argv.slice(2);
    if (argv.length === 0) console.log('WMG: there was no command found in your request. Use wmg help to get more commands.');
    else {
        if (argv[0] === "help")    { execute(require('./src/commands/HelpCommand.js')); }
        else if (argv[0] === "new")     { execute(require('./src/commands/RegisterCommand.js')); }
        else if (argv[0] === "login")   { execute(require('./src/commands/LoginCommand.js')); }
        else if (argv[0] === "whoami")   { execute(require('./src/commands/WhoamiCommand.js')); }
        else if (argv[0] === "config")   { execute(require('./src/commands/ConfigCommand.js')); }
        else if (argv[0] === "quest")   { execute(require('./src/commands/QuestCommand.js')); }
        else if (argv[0] === "status")   { execute(require('./src/commands/StatusCommand.js')); }
        else { console.log('Command ', argv[0], ' could not be found. Try ', 'wmg help'.green,' for more info'); }
    }

    function execute (command) { command.execute(argv.slice(1)); }

});

