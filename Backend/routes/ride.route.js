const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller.js');
const authMiddlewares = require('../middlewares/auth.middlewares.js');
 


router.post('/create',
    authMiddlewares.authUser,
    body('pickup').isString().isLength({ min: 3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3}).withMessage('Invalid Destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid vehicle type'),
    rideController.createRide
);


router.get('/get-fare',
    authMiddlewares.authUser,
    query('pickup').isString().isLength({ min: 3}).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3}).withMessage('Invalid Destination address'),
    rideController.getFare
);

module.exports = router;