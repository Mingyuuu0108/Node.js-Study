const express = require('express');

const router = express.Router();

// app.use('/user', userRouter); 이렇게 호출 했기 떄문에 '/' 는 user 을 포함한 주소
router.get('/', (req, res) => {
    res.send('Hello user :)');
});

module.exports = router;