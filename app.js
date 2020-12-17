const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
    res.render('index', { title: 'NETERO' });
});

const trainingRouter = require('./routes/training');
app.use('/training', trainingRouter);

app.listen(8000, () => {
    console.log('listening on 8000');
});
