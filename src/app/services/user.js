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
        console.log('>>> No User found');
    }
}

async function getAllRoles() {
    try {
        const users = await models.ROLE.findAll({
            attributes: ['ROLE_ID', 'NAME']
        })

        const data = users.map(item => {
            const { ROLE_ID, NAME } = item;

            return {
                ROLE_ID,
                NAME,
            };
        })

        return data;
    } catch (error) {
        console.log('>>> No Role found');
    }
}

module.exports = { getAllUsers, getAllRoles };