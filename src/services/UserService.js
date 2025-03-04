const { User } = require('../models/User');

class UserService {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getUsers() {
        return await User.findAll();
    }

    async getUserById(id) {
        return await User.findByPk(id);
    }

    async updateUser(id, userData) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return await user.update(userData);
    }

    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return await user.destroy();
    }
}

module.exports = new UserService();