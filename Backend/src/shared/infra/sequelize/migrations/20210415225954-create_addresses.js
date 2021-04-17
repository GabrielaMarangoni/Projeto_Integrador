'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, 
      },
      places_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {model: 'places', key: 'id'},
        onUpdate:'CASCADE',
        onDelete: 'CASCADE'
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state:  {
        allowNull: false,
        type: Sequelize.STRING
      },
      street:  {
        allowNull: true,
        type: Sequelize.STRING
      },
      reference:  {
        allowNull: true,
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  }
};
