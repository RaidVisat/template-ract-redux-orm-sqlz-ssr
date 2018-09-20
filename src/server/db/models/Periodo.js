const Sequelize = require('sequelize');
const db = require('../db');
const Periodo = db.define('periodo', {
    idPeriodo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fch_ini: {type: Sequelize.DATE},
    fch_fin: {type: Sequelize.DATE},
});
module.exports = Periodo;
