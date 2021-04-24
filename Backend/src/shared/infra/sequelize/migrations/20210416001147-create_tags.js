'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', {
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
    tag: {
      allowNull: false,
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
    await queryInterface.dropTable('tags')

  }
};
