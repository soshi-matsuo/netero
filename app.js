const path = require('path');
const express = require('express');
const app = express();

const logger = require('./logger');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./routes/indexRouter');
const trainingRouter = require('./routes/trainingRouter');
const achievementRouter = require('./routes/achievementRouter');

app.use('/', indexRouter);
app.use('/training', trainingRouter);
app.use('/achievement', achievementRouter);

app.listen(PORT, () => {
    logger.info('listening on %s', PORT);
});
