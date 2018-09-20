const Usuario = require('./Usuario');
const Encuesta = require('./Encuesta');
const Periodo = require('./Periodo');
const Pregunta = require('./Pregunta');
const Area = require('./Area');
const Carrera = require('./Carrera');
const Miembro = require('./Miembro');

//M:M|Banco
Pregunta.belongsToMany(Encuesta,{through: 'banco', foreignKey: 'idPregunta'});
Encuesta.belongsToMany(Pregunta,{through: 'banco', foreignKey: 'idEncuesta'});

//1:M
Encuesta.hasMany(Periodo,{foreignKey: 'idEncuesta'});
Periodo.belongsTo(Encuesta, {foreignKey: 'idEncuesta'});

//1:M
Usuario.hasMany(Encuesta,{foreignKey: 'ciUsuario'});
Encuesta.belongsTo(Usuario, {foreignKey: 'ciUsuario'});

//1:M
Area.hasMany(Carrera,{foreignKey: 'idArea'});
Encuesta.belongsTo(Usuario, {foreignKey: 'idArea'});

//M:M|Miembro
Area.belongsToMany(Usuario,{through: Miembro, foreignKey: 'idArea'});
Usuario.belongsToMany(Area,{through: Miembro, foreignKey: 'ciUsuario'});

//M:M|Asignacion
Usuario.belongsToMany(Encuesta,{through: 'asignacion', foreignKey: 'idUsuario'});
Encuesta.belongsToMany(Usuario,{through: 'asignacion', foreignKey: 'idEncuesta'});

module.exports = {
    Usuario,
    Miembro,
    Encuesta,
    Periodo,
    Pregunta,
    Area,
    Carrera
};
