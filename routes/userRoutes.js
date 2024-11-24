const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * /users:
*   get:
*     summary: Get all users
*     tags: [Users]
*     responses:
*       200:
*         description: List of Users
*       500:
*         description: Internal server error
*/
router.get('/users', getAllUsers);

module.exports = router;
