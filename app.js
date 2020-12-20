const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

const trainingRouter = require('./routes/trainingRouter');
app.use('/training', trainingRouter);

app.listen(8000, () => {
    console.log('listening on 8000');
});
