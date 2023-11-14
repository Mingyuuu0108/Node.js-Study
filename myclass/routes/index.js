const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { name: 'MINGYU' });
});

// query
router.get('/find', (req, res) => {
    const name = req.query.name || 'default name';
    const email = req.query.name || 'default email';
    res.render('find', { name, email });
});

// params
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('id', { id });
});

module.exports = router;
