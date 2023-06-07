module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Matriculas", [
			{
				status: "confirmado",
				estudante_id: 1,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 2,
			turma_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 3,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 4,
			turma_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 1,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 2,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {});
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Matriculas", null, {});
  }
};
