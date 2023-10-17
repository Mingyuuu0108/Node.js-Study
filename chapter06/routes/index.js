const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // index.pug 파일을 랜더링
    // res.render('index', {
    //     title: "Pug Test",
    //     items: ['apple', 'melon', 'mango'],
    // });

    // index.html 파일을 랜더링
    res.render('index', {
        title: "Nunjucks Test",
        items: ['apple', 'melon', 'mango'],
    });
})

module.exports = router;