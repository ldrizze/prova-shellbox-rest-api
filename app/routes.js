module.exports = function(app){

	const { TaskController } = require('./controllers');

	app.route('/tasks')
		.get(TaskController.list)
		.post(TaskController.create);

	app.route('/tasks/:taskId')
		.get(TaskController.read)
		.put(TaskController.update)
		.delete(TaskController.delete);

}