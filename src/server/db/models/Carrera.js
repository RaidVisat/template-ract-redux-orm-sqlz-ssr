const Sequelize = require('sequelize');
const db = require('../db');
const Carrera = db.define('carrera', {
    idCarrera: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomCarrera: {type: Sequelize.STRING},
    descrCarrera: {type: Sequelize.TEXT},
});
module.exports = Carrera;
