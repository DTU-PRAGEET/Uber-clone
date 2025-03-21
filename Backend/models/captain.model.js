const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },

        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },

    email:{
        type: String,
        required: true,
        unique: true,
        ///////////////////////////// trim: true, (remove whitespace from both ends of a string (start and end))
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },

    password:{
        type: String,
        required: true,
        select: false ////(select option in a schema field determines whether the field is included or excluded by default when querying documents from the database.)
    },

    socketId:{
        type: String
    },

    status:{
        type: String,
        enum: ['active', 'inactive'], ////////(enum option is used to restrict the values of a field to a specific set of allowed values.)
        default: 'inactive'
    },

    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long']
        },

        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters long']
        },

        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },

        vehicleType:{
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true
        }
    },

    location:{
        lat:{
            type: Number,
            // required: true
        },
        lon:{
            type: Number,
            // required: true
        }
    }
});


captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}


const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;