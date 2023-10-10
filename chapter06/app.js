const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello, Express');
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send(error.message);
});

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
});