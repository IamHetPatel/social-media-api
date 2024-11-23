const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const { text, media } = req.body;
        const post = new Post({ text, media, user: req.user.id });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name').sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
