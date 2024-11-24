# 🚀 Social Media Platform API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

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

---

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

#### Get all Users
```http
GET /api/users
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

---

## 🔔 Real-Time Chat and Notifications

### Socket.IO Events

#### 1. Join Chat
- **Event:** `join`
- **Description:** Registers a user with the server
- **Data:**
```json
"12345"  // User ID
```

#### 2. Send Private Message
- **Event:** `privateMessage`
- **Description:** Sends a private message to a specific user
- **Data:**
```json
{
  "senderId": "12345",
  "receiverId": "67890",
  "message": "Hello!"
}
```

#### 3. Receive Private Message
- **Event:** `receiveMessage`
- **Description:** Receives a private message
- **Data:**
```json
{
  "senderId": "12345",
  "message": "Hello!"
}
```

#### 4. New Comment Notification
- **Event:** `commentNotification`
- **Description:** Sends a notification to the post owner when a new comment is added to their post
- **Data:**
```json
{
  "text": "Nice post!",
  "commenter": "67890",    // User ID of the commenter
  "postId": "abcd1234"     // Post ID
}
```

---

## 🧪 Testing Chat and Notifications

---

#### Chat Testing
1. **Setup Multiple Browser Tabs:**
   - Open `/chat.html` in two separate browser tabs
   - Log in with different user IDs in each tab (You can get the user IDs using the /api/users endpoint)

2. **Test Private Messaging:**
   - In Tab 1, send a private message to the user ID in Tab 2
   - Verify real-time message delivery in Tab 2
   - Check message persistence in the database

#### Notification Testing
1. **Comment Notifications:**
   - Use Postman/Insomnia to create a new comment via `/api/comments`
   - Verify that the post owner receives an immediate notification
   - Check notification content matches the comment data

2. **System Health:**
   - Monitor WebSocket connections in browser DevTools
   - Verify proper connection/disconnection handling
   - Test notification delivery with multiple active users

---

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
SERVER_URI=http://localhost:8080
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