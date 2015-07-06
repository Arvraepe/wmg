var QuestService = require('../service/QuestService.js');


function cancel (argv) {
    QuestService.cancel(argv[0], function (data) {
        console.log('Functionality to be implemented ', data);
        process.exit(0);
    });
}

function last (argv) {
    QuestService.last(function (data) {
        console.log('Functionality to be implemented ', data);
        process.exit(0);
    });
}

function start (argv) {
    QuestService.start(argv[0], function (data) {
        console.log('Functionality to be implemented ', data);
        process.exit(0);
    });
}

function list (argv) {
    QuestService.list(function (data) {
        console.log('Functionality to be implemented ', data);
        process.exit(0);
    });
}

exports.execute = function (argv) {
         if (argv[0] === 'list') list(argv.slice(1));
    else if (argv[0] === 'start') start(argv.slice(1));
    else if (argv[0] === 'last') last(argv.slice(1));
    else if (argv[0] === 'cancel') cancel(argv.slice(1));
};
