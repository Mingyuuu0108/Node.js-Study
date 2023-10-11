const express = require('express');

const router = express.Router();

// app.use('/user', userRouter); 이렇게 호출 했기 떄문에 '/' 는 user 을 포함한 주소
router.get('/', (req, res) => {
    res.send('Hello user :)');
});

router.get('/:id', (req, res) => {
    // query 스트링
    const name = req.query.name ?? "이민규";

    console.log(req.app.get('port')); // express 의 객체인 app 에 접근 가능한 req.app
    // res.send(`${req.params.id} : ${limit}`);

    res.json({ // res.json 으로 객체를 json 의 형태로 요청 가능
        message: `my name is ${name}.`
    });
});

// 가변 라우터 아래에 적으면 동작하지 않음, 만약 위에 적었다면 동작함
router.get('/like', (req, res) => {
    res.send("이 코드는 실행되지 않음.")
});

module.exports = router;