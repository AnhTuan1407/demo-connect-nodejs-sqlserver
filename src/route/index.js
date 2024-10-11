const product = require('./product');
const user = require('./user');
const site = require('./site');

function router(app) {
    app.use('/products', product);

    app.use('/users', user);

    app.use('/', site);
}

module.exports = router;