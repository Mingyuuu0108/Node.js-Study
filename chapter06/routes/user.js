const express = require('express');

const router = express.Router();

// app.use('/user', userRouter); 이렇게 호출 했기 떄문에 '/' 는 user 을 포함한 주소
router.get('/', (req, res) => {
    res.send('Hello user :)');
});

router.get('/:id', (req, res) => {
    // query 스트링
    const limit = req.query.limit ?? 1;
    res.send(`${req.params.id} : ${limit}`);
});
// 가변 라우터 아래에 적으면 동작하지 않음, 만약 위에 적었다면 동작함
router.get('/like', (req, res) => {
    res.send("이 코드는 실행되지 않음.")
});

module.exports = router;