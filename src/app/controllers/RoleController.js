const { getAllRoles } = require('../services/user');

class RoleController {
    //[GET] /roles/findAll
    async showAllRole(req, res, next) {
        const roles = await getAllRoles();
        res.json(roles);
    }
}

module.exports = new RoleController();