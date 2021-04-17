const { v4: uuidv4 } = require('uuid');
const { Model, DataTypes } = require('sequelize');

class Addresses extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4()
            },
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            street: DataTypes.STRING,
            reference: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Places, { foreignKey: 'places_id',  as: 'places' })
    }
}

module.exports = Addresses;