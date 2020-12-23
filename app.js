const path = require('path');
const express = require('express');
const app = express();

const logger = require('./logger');

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

const trainingRouter = require('./routes/trainingRouter');
app.use('/training', trainingRouter);

app.listen(PORT, () => {
    logger.info('listening on %s', PORT);
});
