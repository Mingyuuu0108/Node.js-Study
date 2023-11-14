const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const path = require('path');

const indexRouter = require('./routes/index');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
})

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Router 들어갈 자리

app.use('/', indexRouter);

// 404 error handler
app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });
  
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

  // 서버 켜기
  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
  });