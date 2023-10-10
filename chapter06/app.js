const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

// .env 파일 가져옴
dotenv.config();
const app = express();

// process.env.PORT : 환경변수의 PORT 가져옴
app.set('port', process.env.PORT || 3000);

// morgan : dev 모드의 콘솔 로그 출력
app.use(morgan('dev'));
 // static : Controller 접근 이전 public 폴더 내부에 있는 사진을 가지고 옴
app.use('/', express.static(path.join(__dirname, 'public')));

// 요청의 본문을 해석해서 객체화
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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