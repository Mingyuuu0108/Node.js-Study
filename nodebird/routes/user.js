const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow, unfollow, changeNickname } = require('../controllers/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, follow);
router.post("/:id/unfollow", isLoggedIn, unfollow);
router.patch("/change-nickname", isLoggedIn, changeNickname);

module.exports = router;
