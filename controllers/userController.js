const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'name email _id'); // Exclude sensitive fields like password
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
