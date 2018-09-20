const Sequelize = require('sequelize');
const db = require('../db');
const Pregunta = db.define('pregunta', {
    idPregunta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoPregunta: {type: Sequelize.STRING},
    pregunta: {type: Sequelize.TEXT},
    respuesta: {type: Sequelize.STRING},
    opciones: {type: Sequelize.JSON}
});
module.exports = Pregunta;
