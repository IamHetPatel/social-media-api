const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res) => {
    try {
        const { text, media } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Post content is required' });
        }
        
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
        const postsWithComments = await Promise.all(
            posts.map(async (post) => {
                const comments = await Comment.find({ post: post._id }).populate('user', 'name');
                return { ...post.toObject(), comments };
            })
        );

        res.json(postsWithComments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
