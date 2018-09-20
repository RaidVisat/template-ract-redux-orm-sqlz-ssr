const router = require('express').Router();
const {Usuario} =require('../db/models');

router.get('/all', (req, res, next)=> {
    Usuario.findAll()
        .then(user => res.json(user))
        .catch(next);
});
router.get('/:userID', (req, res, next) => {
    Usuario.findById(req.params.userID)
        .then(user => user.sanitize())
        .then(user => res.status(200).send(user))
        .catch(next)
});

router.post('/', (req, res, next) => {
    Usuario.create(req.body)
        .then(user => res.status(201).json(user.sanitize()))
        .catch(next)
});

module.exports = router;
