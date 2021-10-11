const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [

        {
            type: Schema.Types.ObjectId,
            ref: 'Event'


        }
    ]
});
module.exports = mongoose.model('User', userSchema);


// mongodb+srv://newuser1204:PeAelelJfySkEKXH@cluster0.arque.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority