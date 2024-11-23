const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const { text, postId } = req.body;
        const comment = new Comment({ text, post: postId, user: req.user.id });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
