const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller.js');
const authMiddlewares = require('../middlewares/auth.middlewares.js');

router.post('/register', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name is atleast of 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password is atleast of 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color is atleast of 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate is atleast of 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity is atleast of 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle Type must be either car, motorcycle or auto'),
],
    captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password is atleast of 6 characters long'),
],
    captainController.loginCaptain
)

router.get('/profile', authMiddlewares.authCaptain ,captainController.getCaptainProfile);
router.get('/logout', authMiddlewares.authCaptain ,captainController.logoutCaptain);

module.exports = router;