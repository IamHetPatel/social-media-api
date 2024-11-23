const express = require('express');
const { createComment } = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Add a comment to a post
 *     tags: [Comments]
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
 *               postId:
 *                 type: string
 *             example:
 *               text: This is a comment
 *               postId: 6384b123456789abc1234567
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Bad request
 */
router.post('/comments', authMiddleware, createComment);

module.exports = router;
