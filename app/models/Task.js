module.exports = (sequelize, DataTypes) => {

	return sequelize.define('Task', {
		title		: DataTypes.STRING
	});

}