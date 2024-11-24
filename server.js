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
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./utils/errorHandler');
const { swaggerUi, swaggerDocs } = require('./config/swagger');
const path = require('path');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });
app.set('io', io);
require('./sockets/chatSocket')(io);

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', chatRoutes);
app.use('/api', userRoutes);

// API route for Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Error handling middleware
app.use(errorHandler);

app.use(express.static(path.join(__dirname, 'public')));

const SERVER_URI = process.env.SERVER_URI || 'http://localhost:8080' ;
server.listen(8080, () => {
    console.log(`Server running on ${SERVER_URI}`);
});
