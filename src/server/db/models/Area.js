const Sequelize = require('sequelize');
const db = require('../db');
const Area = db.define('area', {
    idArea: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomArea: {type: Sequelize.STRING},
    descrArea: {type: Sequelize.TEXT},
});
module.exports = Area;
