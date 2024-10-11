const db = require('../app/models/index');
const initialModelSqlServer = require('../app/models/initial-models');
const models = initialModelSqlServer(db);

module.exports.infoUser = async (req, res, next) => {
    if (req.cookie.tokenUser) {
        const user = await models.USER.findOne({
            where: { TOKEN_USER: req.cookie.tokenUser }
        })

        if (user) {
            res.locals.user = user;
            console.log(user);
        }
    }

    next();
}