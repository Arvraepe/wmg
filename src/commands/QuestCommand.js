var QuestService = require('../service/QuestService.js');
var Prompt = require('prompt');

function getDifficultyLabel (difficulty) {
    if (difficulty >= 6) return 'Near impossible'.red;
    if (difficulty >= 5) return 'Hard'.red;
    if (difficulty >= 4) return 'Difficult'.red;
    if (difficulty >= 3) return 'Normal'.yellow;
    if (difficulty >= 2) return 'Easy'.green;
}

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
    QuestService.start({
        inputId: argv[0],
        onSuccess: function (data) {
            console.log('You successfully started a quest...');
            process.exit(0);
        }
    });
}

function list (argv) {
    QuestService.list({
        onSuccess: function (data) {
            console.log('The following quests are currently available to you: \n');

            data
                .filter(function (quest) { return quest.state !== 'NOTIFIED' && quest.state !== 'FINISHED'; })
                .sort(function (a, b) { return parseInt(a.inputId, 10) - parseInt(b.inputId, 10); })
                .forEach(function (quest) {
                    var isOngoingText = quest.state === 'PENDING' ? ' [ON GOING]'.green : '';
                    console.log(quest.inputId+'. '+quest.description+isOngoingText);
                    console.log(
                        ' Level: ' +quest.level.toString().green+
                        ' Gold: '+quest.gold.toString().green+
                        ' Experience: '+quest.experience.toString().green+
                        ' Duration: '+quest.duration.toString().green+
                        ' Difficulty: '+getDifficultyLabel(quest.difficulty)+
                        '\n'
                    );
                }
            );

            process.exit(0);
        }
    });
}

exports.execute = function (argv) {
         if (argv[0] === 'list') list(argv.slice(1));
    else if (argv[0] === 'start') start(argv.slice(1));
    else if (argv[0] === 'last') last(argv.slice(1));
    else if (argv[0] === 'cancel') cancel(argv.slice(1));
};
