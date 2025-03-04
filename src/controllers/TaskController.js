const Task = require("../services/TaskService");

module.exports = {
    async createTask(req, res) {

        try {
            const task = await TaskService.createTask(req.body);
            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getTasks(req, res) {

        try {
            const tasks = await TaskService.getTasks();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getTaskById(req, res) {

        try {
            const task = await TaskService.getTaskById(req.params.id);
            if (!task) return res.status(404).json({ error: 'Task not found' });
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async updateTask(req, res) {

        try {
            const task = await TaskService.updateTask(req.params.id, req.body);
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deleteTask(req, res) {

        try {
            await TaskService.deleteTask(req.params.id);
            return res.status(200).json({ message: 'Task deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
