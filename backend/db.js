import mongoose from 'mongoose';
// import schema from mongoose;

const user = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// create model from schema
const User = mongoose.model("User", user);

module.exports = {
    User
};
