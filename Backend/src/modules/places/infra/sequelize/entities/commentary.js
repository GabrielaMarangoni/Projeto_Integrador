const { v4: uuidv4 } = require('uuid');
const { Model, DataTypes } = require('sequelize');

class Commentary extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4()
            },
            commentary: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Places, { foreignKey: 'places_id',  as: 'places' })
    }
}

module.exports = Commentary;