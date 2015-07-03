exports.schema = {
    properties: {
        username: {
            pattern: /^[a-z]{4,24}$/,
            message: 'Username must be lower case, min 4, max 24 characters',
            required: true
        },
        password: {
            hidden: true
        },
        retypePassword: {
            hidden: true
        }
    }
};
