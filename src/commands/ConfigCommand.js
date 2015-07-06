var ConfigHandler = require('../infrastructure/ConfigHandler.js');

exports.execute = function (argv) {
    console.log(argv);

    if (argv[0] === 'server') {
        console.log('server setting');
        ConfigHandler.writeConfig({ server: argv[1] }, function (err) {
            if (err) { console.error('Could not write server setting'); }
            else { console.log('Updated server setting successfully!'); }
            process.exit(0);
        });
    }
};

