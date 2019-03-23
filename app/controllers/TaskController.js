const { Task } = require('../models');


/**
* Tasks Controller
* @class TasksController
*/
module.exports = (function(){

	/**
	* Return an ordered list of Task objects from new to older
	*
	* @param Object req Express reqsuition
	* @param Object res Express response
	* @return JSON list of Task
	*/
	async function list(req, res){
		let page = parseInt(req.query.page || 1);
		try{
			const tasks = await Task.findAndCountAll({
				order: [
					['id', 'DESC']
				],
				limit: 10,
				offset: 10 * (page-1)
			});

			res.setHeader('Content-Type', 'application/json');
			res.send(tasks);
		}catch(e){
			console.error(e);
			res.status(500).send(e.toString());
		}
	}

	/**
	* Create a new Task
	*
	* @param Object req Express reqsuition
	* @param Object res Express response
	* @return string 200 OK if success or 500 if fails
	*/
	async function create(req, res){
		try{
			Task.create(req.body);
			res.sendStatus(201);
		}catch(e){
			console.error(e);
			res.status(500).send(e.toString());
		}
	}

	/**
	* Read / Get one Task information
	*
	* @param Object req Express reqsuition
	* @param Object res Express response
	* @return JSON The Task if success or 500 if fails
	*/
	async function read(req, res){
		try{
			const task = await Task.findByPk(req.params.taskId);
			if(!task) res.sendStatus(404);
			else{
				res.setHeader('Content-Type', 'application/json');
				res.send(task);
			}
		}catch(e){
			console.error(e);
			res.status(500).send(e.toString());
		}
	}

	/**
	* Update a Task
	*
	* @param Object req Express reqsuition
	* @param Object res Express response
	* @return JSON The Task if success or 500 if fails
	*/
	async function update(req, res){
		try{
			const task = await Task.findByPk(req.params.taskId);
			if(!task) res.sendStatus(404);
			else{
				task.update(req.body);
				res.setHeader('Content-Type', 'application/json');
				res.send(task);
			}
		}catch(e){
			console.error(e);
			res.status(500).send(e.toString());
		}
	}

	/**
	* Delete a Task
	*
	* @param Object req Express reqsuition
	* @param Object res Express response
	* @return string 200 OK if success or 500 if fails
	*/
	async function remove(req, res){
		try{
			const task = await Task.findByPk(req.params.taskId);
			if(!task) res.sendStatus(404);
			else{
				task.destroy();
				res.sendStatus(200);
			}
		}catch(e){
			console.error(e);
			res.status(500).send(e.toString());
		}
	}

	return {
		controller_name: 'TaskController',
		list: list,
		create: create,
		read: read,
		update: update,
		delete: remove
	};

})();
