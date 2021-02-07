const express = require('express');
const router = express.Router();

const achievementRegistrationUsecase = require('../application/usecase/achievementRegistrationUsecase');

router.post('/:id', async (req, res) => {
    const isSaved = await achievementRegistrationUsecase.save(req.params.id);
    if (!isSaved) {
        res.status(400).send('You can Achieve only once a day');
    } else {
        res.redirect('/index');
    }
});

module.exports = router;
