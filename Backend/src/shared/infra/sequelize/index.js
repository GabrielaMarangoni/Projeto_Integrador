const Sequelize = require('sequelize');
const config = require('./config.json');
const Places = require('../../../modules/places/infra/sequelize/entities/places');
const Addresses = require('../../../modules/places/infra/sequelize/entities/addresses');
const Tags = require('../../../modules/places/infra/sequelize/entities/tags');
const Images = require('../../../modules/places/infra/sequelize/entities/images');
const Commentary = require('../../../modules/places/infra/sequelize/entities/commentary');

const connection = new Sequelize(config);

Places.init(connection);
Addresses.init(connection);
Tags.init(connection);
Images.init(connection);
Commentary.init(connection);

Places.associate(connection.models);
Addresses.associate(connection.models);
Tags.associate(connection.models);
Images.associate(connection.models);
Commentary.associate(connection.models);

module.exports = connection;