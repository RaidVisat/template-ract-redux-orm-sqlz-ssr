const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const Usuario = db.define('usuario', {
    ciUsuario: {
        type: Sequelize.STRING(15),
        primaryKey: true
    },
    nombre: {type: Sequelize.STRING(50)},
    apPaterno: {type: Sequelize.STRING(50)},
    apMaterno: {type: Sequelize.STRING(50)},
    email: {type: Sequelize.STRING(50)},
    celular: {type: Sequelize.STRING(15)},
    password: {type: Sequelize.STRING},
},{
    freezeTableName: true
});
//hooks
const setSaltandHashPassword = (userInstance, optionsObject) => {
    if (userInstance.changed('password') || userInstance.isNewRecord) {
        return bcrypt.genSalt()
            .then(salt => {
                return bcrypt.hash(userInstance.password, salt)
            })
            .then(hash => {
                userInstance.password = hash;
                return userInstance
            })
            .catch(console.error)
    }
};

Usuario.beforeCreate(setSaltandHashPassword);

Usuario.beforeUpdate(setSaltandHashPassword);


//instance methods
Usuario.prototype.isCorrectPassword = function(input) {
    return bcrypt.compare(input, this.password)
        .then(result => result)
        .catch(console.error)
};

Usuario.prototype.sanitize = function () {
    return _.omit(this.toJSON(), ['password'])
};
module.exports = Usuario;
