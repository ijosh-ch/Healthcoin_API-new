const models = require('../models');

class UserRoleController {
    static async index() {
        return await models.UserRole.findAll(/*{include: ['users']}*/);
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
