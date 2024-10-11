
const db = require('../models/index');
const initialModelSqlServer = require('../models/initial-models');
const models = initialModelSqlServer(db);


async function getAllProducts() {

    try {
        const products = await models.PRODUCT.findAll({
            attributes: ['PRODUCT_ID', 'NAME', 'DESCRIPTION', 'PRICE', 'DATE_RELEASE', 'CATEGORY_ID']
        });

        const data = products.map(item => {
            const { PRODUCT_ID, NAME, DESCRIPTION, PRICE, DATE_RELEASE, CATEGORY_ID } = item;
            return {
                PRODUCT_ID,
                NAME,
                DESCRIPTION,
                PRICE,
                DATE_RELEASE,
                CATEGORY_ID,
            };
        });
        
        return data;

    } catch (error) {
        console.log('cant connect to db');
    };
};

module.exports = { getAllProducts }

