const express = require('express');

const router = express.Router();

const members = [
    { memberId: 1, name: '민규', age: 20 },
    { memberId: 2, name: '규민', age: 17 }
]

router.get('/', (req, res) => {

    const name = req.query.name;
    if (name) {
        const result = members.filter((members) => {
            return members.name.includes(name);
        });
        res.json(result);
    } else {
        res.json(members);
    }
});

router.get('/:memberId', (req, res) => {
    
    const memberId = req.params.memberId;
    const result = members.find((member) => member.memberId == memberId);
    if (result) {
        res.json(result);
    } else {
        res.json({});
    }
})

module.exports = router;