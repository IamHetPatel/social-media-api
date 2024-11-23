const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { errorHandler } = require('./utils/errorHandler');
const { swaggerUi, swaggerDocs } = require('./config/swagger');


dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

require('./sockets/chatSocket')(io);

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', chatRoutes);

// API route for Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
