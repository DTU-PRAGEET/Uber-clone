const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/auth.middlewares.js');
const mapController = require('../controllers/maps.controller.js');
const { query } = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddlewares.authUser,
    mapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddlewares.authUser,
    mapController.getDistanceTime
);

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiddlewares.authUser,
    mapController.getAutoCompleteSuggestions
);


module.exports = router;

