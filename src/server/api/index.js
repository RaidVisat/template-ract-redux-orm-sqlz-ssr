const router = require('express').Router();

router.use('/usuarios', require('./Usuarios'));

router.use((req, res, next) => {
    res.status(404).send('Not found');
    next(res.err);

});

module.exports = router;
