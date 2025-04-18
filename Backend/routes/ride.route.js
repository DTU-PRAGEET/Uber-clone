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

router.post('/confirm',
    authMiddlewares.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride ID'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddlewares.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride ID'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddlewares.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride ID'),
    rideController.endRide
)

module.exports = router;