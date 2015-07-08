var InformationService = require('../service/InformationService.js');

exports.execute = function (argv) {
    InformationService.status({
        onSuccess: function (data) {
            console.log(data);
            process.exit(0);
        },
        onFail: function () { console.log('test'); }
    });
};
