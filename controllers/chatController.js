const Chat = require('../models/Chat');

exports.getChatHistory = async (req, res) => {
    try {
        const { userId } = req.params; // The other user
        const currentUserId = req.user.id;

        const chats = await Chat.find({
            $or: [
                { sender: currentUserId, receiver: userId },
                { sender: userId, receiver: currentUserId },
            ],
        }).sort({ timestamp: 1 }); // Sort by oldest first

        res.json(chats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
