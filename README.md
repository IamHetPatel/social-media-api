# 🚀 Social Media Platform API

A robust social media platform backend API built with the MERN stack, featuring real-time chat capabilities powered by Socket.IO. This API provides a comprehensive solution for user authentication, post management, commenting system, and private messaging.

## ✨ Features

### 🔐 User Authentication
- Secure registration and login system
- JWT-based authentication
- Password hashing with bcrypt

### 📝 Post Management
- Create and retrieve posts
- Support for media URLs
- Efficient post listing with pagination

### 💬 Commenting System
- Add comments to posts
- Nested comment retrieval
- Real-time comment updates

### 💌 Real-Time Chat
- Private one-to-one messaging
- Message persistence in MongoDB
- Real-time message delivery

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Real-time Communication**: Socket.IO
- **Deployment**: Render

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/signup
```
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
```
**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Post Endpoints

#### Create Post
```http
POST /api/posts
```
**Headers:**
```
Authorization: Bearer <token>
```
**Body:**
```json
{
  "text": "Hello, world!",
  "media": "https://example.com/image.jpg"
}
```

#### Get All Posts
```http
GET /api/posts
```

### Comment Endpoints

#### Add Comment
```http
POST /api/comments
```
**Headers:**
```
Authorization: Bearer <token>
```
**Body:**
```json
{
  "postId": "<post_id>",
  "text": "Nice post!"
}
```

### Real-Time Chat Events

#### Join Chat
```javascript
socket.emit('join', userId);
```

#### Send Private Message
```javascript
socket.emit('privateMessage', {
  senderId: '12345',
  receiverId: '67890',
  message: 'Hello!'
});
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/IamHetPatel/social-media-api
```

2. Install dependencies
```bash
cd social-media-api
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` with your credentials:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development server
```bash
npm run dev
```


## 📦 Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── utils/          # Utility functions
└── app.js         # App entry point
```

## 🌟 Future Enhancements

- [ ] Group chat functionality
- [ ] Push notifications
- [ ] File upload support
- [ ] Message read receipts
- [ ] User profiles with avatars

---
<div align="center">
Made with ❤️ by Het Patel
</div>