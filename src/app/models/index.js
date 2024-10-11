const Sequelize = require('sequelize');
const connect = require('../../config/db/index');

const db = new Sequelize(connect.development);

// sequelizeSQL.authenticate()
//     .then(() => {
//         console.log('Connection established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

// sequelizeSQL.query(
//     'SELECT P.PRODUCT_ID, P.NAME, P.DESCRIPTION, P.DATE_RELEASE, P.PRICE, C.NAME FROM PRODUCTS P, CATEGORY C WHERE P.CATEGORY_ID = C.CATEGORY_ID',
// )
//     .then((results) => {
//         console.log('>>> Results: ', results);
//     })
//     .catch((errors) => {
//         console.log('>>> Errors: ', errors);
//     })

module.exports = db;