const { Post, Hashtag } = require('../models');

exports.afterUploadImage = (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` });
};

exports.uploadPost = async (req, res, next) => {
    try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0]));
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시물 수정 기능
exports.editPost = async (req, res, next) => {
  try {
    const { content } = req.body;
    const postId = req.params.id;
    const post = await Post.findByPk(postId);

    post.content = content;

    await post.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시물 삭제 기능
exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    
    await Post.destroy({ where: { id: postId } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
