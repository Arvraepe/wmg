#! /usr/bin/env node
var prompt = require('prompt');

var argv = process.argv.slice(2);
if (argv.length === 0) console.log('WMG: there was no command found in your request. Use wmg help to get more commands.');
else {
         if (argv[0] === "help")    { execute(require('./src/commands/HelpCommand.js')); }
    else if (argv[0] === "new")     { execute(require('./src/commands/RegisterCommand.js')); }
    else if (argv[0] === "login")   { execute(require('./src/commands/LoginCommand.js')); }
    else { console.log('Command ', argv[0], ' could not be found. Try ', 'wmg help'.green,' for more info'); }
}

function execute (command) { command.execute(argv.slice(1)); }