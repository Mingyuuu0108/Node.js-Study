const express = require('express');

const router = express.Router();

const members = [
    { memberId: 1, name: 'mingyu' },
    { memberId: 2, name: 'gyumin' }
]

router.get('/', (req, res) => {
    res.json(members);
});

module.exports = router;