const { Task } = require('../models');

class TaskService {
    async createTask(taskData) {
        return await Task.create(taskData);
    }

    async getTasks() {
        return await Task.findAll();
    }

    async getTaskById(id) {
        return await Task.findByPk(id);
    }

    async updateTask(id, taskData) {
        const task = await Task.findByPk(id);
        if (!task) throw new Error('Task not found');
        return await task.update(taskData);
    }

    async deleteTask(id) {
        const task = await Task.findByPk(id);
        if (!task) throw new Error('Task not found');
        return await task.destroy();
    }
}

module.exports = new TaskService();