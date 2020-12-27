const express = require('express');
const router = express.Router();

const achievementUsecase = require('../application/usecase/achievementUsecase');

router.post('/:id', async (req, res) => {
    const isSaved = await achievementUsecase.save(req.params.id);
    if (!isSaved) {
        res.status(400).send('You can Achieve only once a day');
    } else {
        res.redirect('/');
    }
});

module.exports = router;
