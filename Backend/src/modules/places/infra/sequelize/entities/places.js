const { v4: uuidv4 } = require('uuid');
const { Model, DataTypes } = require('sequelize');

class Places extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4()
            },
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasOne(models.Addresses, { foreignKey: 'places_id', as: 'address'})
        this.hasMany(models.Tags, { foreignKey: 'places_id', as: 'tags'} )
        this.hasMany(models.Images, { foreignKey: 'places_id', as: 'images'} )
        this.hasMany(models.Commentary, { foreignKey: 'places_id', as: 'commentary'} )

    }
}

module.exports = Places;