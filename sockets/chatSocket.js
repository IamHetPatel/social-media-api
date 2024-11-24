const users = {}; // Maps userId to socketId

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        // User joins with their userId
        socket.on('join', (userId) => {
            users[userId] = socket.id;
            console.log(`User ${userId} is connected with socket ${socket.id}`);
        });

        // Handle private messages
        socket.on('privateMessage', async ({ senderId, receiverId, message }) => {
            const receiverSocketId = users[receiverId];
            
            // Save the message to the database
            const Chat = require('../models/Chat');
            const chatMessage = new Chat({ sender: senderId, receiver: receiverId, message });
            await chatMessage.save();

            // Send message to the receiver if online
            if (receiverSocketId) {
                io.to(receiverSocketId).emit('receiveMessage', { senderId, message });
            }
        });

        // Remove disconnected users
        socket.on('disconnect', () => {
            for (const [userId, socketId] of Object.entries(users)) {
                if (socketId === socket.id) {
                    delete users[userId];
                    console.log(`User ${userId} disconnected`);
                }
            }
        });
    });
};
