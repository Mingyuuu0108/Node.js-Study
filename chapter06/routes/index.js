const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // index.pug 파일을 랜더링
    res.render('index', {
        // 데이터 전달
        title: "Pug Test",
        items: ['apple', 'melon', 'mango']
    });
})

module.exports = router;