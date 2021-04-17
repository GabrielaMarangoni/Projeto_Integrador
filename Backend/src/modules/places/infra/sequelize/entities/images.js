const { v4: uuidv4 } = require('uuid');
const { Model, DataTypes } = require('sequelize');

class Images extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4()
            },
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Places, { foreignKey: 'places_id',  as: 'places' })
    }
}

module.exports = Images;