const Sequelize = require('sequelize');
const db = require('../db');
const Miembro = db.define('miembro', {
    tipoMiembro: {type: Sequelize.STRING},
});
module.exports = Miembro;
