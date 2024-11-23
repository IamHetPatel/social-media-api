const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               media:
 *                 type: string
 *             example:
 *               text: This is a sample post
 *               media: http://example.com/image.png
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Bad request
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: List of posts
 *       500:
 *         description: Internal server error
 */
router.post('/posts', authMiddleware, createPost);
router.get('/posts', getPosts);

module.exports = router;

