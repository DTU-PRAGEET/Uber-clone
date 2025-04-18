const rideService = require('../services/ride.service.js');
const { validationResult } = require('express-validator');
const mapsService = require('../services/maps.service.js');
const { sendMessageToSocketId } = require('../socket.js');
const rideModel = require('../models/ride.model.js');

module.exports.createRide = async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;
    
    
    try {
        const ride = await rideService.createRide({user: req.user._id, pickup, destination, vehicleType});
        res.status(201).json(ride);

        const pickupCoordinates = await mapsService.getAddressCoordinate(pickup);
        console.log(pickupCoordinates);
        
        const captainsInRadius = await mapsService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2); // 2km radius
        console.log(captainsInRadius);
 
        ride.otp = "";
        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
        

        captainsInRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser
            })

        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




module.exports.getFare = async (req, res) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    const { pickup, destination } = req.query;

    try{
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);

    }catch(err){
        return res.status(500).json({message: err.message})
    }

}



module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;
    try {
        const ride = await rideService.confirmRide({rideId, captain: req.captain});
        
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        });        
        
        return res.status(200).json(ride);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;
    try {
        const ride = await rideService.startRide({rideId, otp, captain: req.captain});
        
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        });
        
        return res.status(200).json(ride);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



module.exports.endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;
    try {
        const ride = await rideService.endRide({rideId, captain: req.captain});
        
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        });


        
        return res.status(200).json(ride);
    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: error.message });
    }
}