const { User } = require('../models');

class UserService {
    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            throw new Error('Failed to create user: ' + error.message);
        }
    }

    async getUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw new Error('Failed to fetch users: ' + error.message);
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            return user;
        } catch (error) {
            throw new Error('Failed to fetch user: ' + error.message);
        }
    }

    async updateUser(id, userData) {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            await user.update(userData);
            return user;
        } catch (error) {
            throw new Error('Failed to update user: ' + error.message);
        }
    }

    async deleteUser(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            await user.destroy();
            return { message: 'User deleted successfully' };
        } catch (error) {
            throw new Error('Failed to delete user: ' + error.message);
        }
    }
}

module.exports = new UserService(); 