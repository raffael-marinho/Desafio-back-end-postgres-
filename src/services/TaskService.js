const { Task } = require('../models/Task');

class TaskService {
    async createTask(taskData) {
        try {
            const task = await Task.create(taskData);
            return task;
        } catch (error) {
            throw new Error('Failed to create task: ' + error.message);
        }
    }

    async getTasks() {
        try {
            const tasks = await Task.findAll();
            return tasks;
        } catch (error) {
            throw new Error('Failed to fetch tasks: ' + error.message);
        }
    }

    async getTaskById(id) {
        try {
            const task = await Task.findByPk(id);
            if (!task) throw new Error('Task not found');
            return task;
        } catch (error) {
            throw new Error('Failed to fetch task: ' + error.message);
        }
    }

    async updateTask(id, taskData) {
        try {
            const task = await Task.findByPk(id);
            if (!task) throw new Error('Task not found');
            await task.update(taskData);
            return task;
        } catch (error) {
            throw new Error('Failed to update task: ' + error.message);
        }
    }

    async deleteTask(id) {
        try {
            const task = await Task.findByPk(id);
            if (!task) throw new Error('Task not found');
            await task.destroy();
            return { message: 'Task deleted successfully' };
        } catch (error) {
            throw new Error('Failed to delete task: ' + error.message);
        }
    }
}

module.exports = new TaskService(); 