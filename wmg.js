#! /usr/bin/env node

var argv = process.argv.slice(2);
if (argv.length === 0) console.log('WMG: there was no command found in your request. Use wmg help to get more commands.');
else {
         if (argv[0] === "help") { require('./src/commands/HelpCommand.js').execute(argv.slice(1)); }
    else if (argv[0] === "new") { require('./src/commands/RegisterCommand.js').execute(argv.slice(1)); }
}

process.argv[0]

//C.post('/register', { username: 'arninja', password: 'test' }, function (err, req, res, obj){
//    if (err) { console.error(err); } else {
//        console.log('success', obj);
//    }
//});


C.post('/authenticate', { username: 'testuser', password: 'test' }, function (err, req, res, obj){
    if (err) { console.error(err); } else {
        console.log('success', obj);
    }
});