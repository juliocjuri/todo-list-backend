const tasksModel = require('../models/taskModel')

const getAll = async (req, res) => {
     const tasks = await tasksModel.getAll();
     return res.status(200).json(tasks)
};

const createTask = async (req, res) => {
     // const createdTask = await tasksModel.createTask()
     return res.status(201).json({message: 'ok'})
}
//44:27
module.exports = {
     getAll,
     createTask};