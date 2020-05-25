// Import
const account = require('./account/lib');

// Export
module.exports = (app) => {
    app.post('/login', account.login);
    app.post('/signup', account.signup);
}