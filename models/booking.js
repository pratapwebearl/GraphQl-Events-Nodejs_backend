const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookingSchema = new Schema(
    {
    event: {
        type:Schema.Types.ObjectId,
        ref:'Event'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},
    { timestamps:true }

);
module.exports = mongoose.model('Booking',bookingSchema);



// const mongoose = require('mongoose');
// const Schema = mongoose.schema;
// const User = require('../models/user');
// const bookingSchema = new mongoose.Schema;
// ({
//     event: {
//         type: Schema.Types.ObjectId,
//         ref: 'Event'
//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },

// }, { timestamps: true });

// module.exports = mongoose.model('Booking', bookingSchema);