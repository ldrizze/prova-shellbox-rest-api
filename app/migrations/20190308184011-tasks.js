'use strict';

module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('tasks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			title: {
				allowNull: false,
				type: DataTypes.STRING
			},

			// Timestamps
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE
			},
			updatedAt: {
				allowNull: true,
				type: DataTypes.DATE
			}
		});
	},

	down: (queryInterface, DataTypes) => {
		return queryInterface.dropTable('tasks');
	}
};
