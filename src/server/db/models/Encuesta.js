const Sequelize = require('sequelize');
const db = require('../db');
const Encuesta = db.define('encuesta', {
   idEncuesta: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   nomEncuesta: {type: Sequelize.TEXT},
    descrEncuesta: {type: Sequelize.TEXT},
});
module.exports = Encuesta;
