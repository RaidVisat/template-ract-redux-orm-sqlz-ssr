const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
    $gt: Op.gt
};
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:raid@localhost:5432/encuesta',{
    operatorsAliases
});
module.exports = db;
