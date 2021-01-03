const express = require('express');
const router = express.Router();

const trainingUsecase = require('../application/usecase/trainingUsecase');

router.post('/', (req, res) => {
    trainingUsecase.save(req.body);
    res.redirect('/');
});

router.get('/:id', (req, res) => {
    const renderableData = { 
        training: { id: req.params.id, name: 'push up', velocity: '10', unit: 'times' },
        aggregate: { sum: 80 }
    };
    res.render('detail', renderableData);
});

module.exports = router;
