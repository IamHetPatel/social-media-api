const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const { text, postId } = req.body;
        if (!text || !postId) {
            return res.status(400).json({ error: 'Comment text and post ID are required' });
        }        
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const comment = new Comment({ text, post: postId, user: req.user.id });
        await comment.save();

        const io = req.app.get('io');
        io.emit('newComment', {
            postOwnerId: post.user.toString(),
            commentDetails: {
                text: comment.text,
                commenter: req.user.id,
                postId: post._id,
            },
        });

        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
