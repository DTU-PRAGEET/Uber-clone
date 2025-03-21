const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller.js');
const authMiddlewares = require('../middlewares/auth.middlewares.js');


router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name is atleast of 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password is atleast of 6 characters long'),
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password is atleast of 6 characters long'),
],
    userController.loginUser
)


router.get('/profile', authMiddlewares.authUser ,userController.getUserProfile);
router.get('/logout', authMiddlewares.authUser ,userController.logoutUser);




module.exports = router;