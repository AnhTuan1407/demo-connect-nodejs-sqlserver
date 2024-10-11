const db = require('../models/index');
const initialModelSqlServer = require('../models/initial-models');
const models = initialModelSqlServer(db);

async function getAllUsers() {
    try {
        const users = await models.USER.findAll({
            attributes: ['USERNAME', 'PASSWORD', 'ROLE_ID', 'TOKEN_USER']
        })

        const data = users.map(item => {
            const { USERNAME, PASSWORD, ROLE_ID, TOKEN_USER } = item;

            return {
                USERNAME,
                PASSWORD,
                ROLE_ID,
                TOKEN_USER,
            };
        })

        return data;
    } catch (error) {
        console.log('Cant connect to db');
    }
}

module.exports = { getAllUsers };