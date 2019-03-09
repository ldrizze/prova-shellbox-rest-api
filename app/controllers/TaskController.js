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
		try{
			const tasks = await Task.findAll({
				order: [
					['id', 'DESC']
				]				
			});

			res.setHeader('Content-Type', 'application/json');
			res.send(tasks);
		}catch(e){
			console.error(e);
			res.send(e.toString(), 500);
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
			res.sendStatus(200);
		}catch(e){
			console.error(e);
			res.send(e.toString(), 500);
		}
	}

	async function read(req, res){
		try{
			const task = await Task.findById(req.params.taskId);
			if(!task) res.sendStatus(404);
			else res.send(task);
		}catch(e){
			console.error(e);
			res.send(e.toString(), 500);
		}
	}

	async function update(req, res){

	}

	async function remove(req, res){
		
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