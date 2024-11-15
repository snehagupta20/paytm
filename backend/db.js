import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config({ path: '.env' });

const URL = process.env.MONGODB_URI;

// console.log(URL);

mongoose.connect(URL)
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch((err) => {
    console.log("Some error -", err);
});


const userSchema = new mongoose.Schema({
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
const User = mongoose.model("User", userSchema);

const accountSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        red: "User",
        required: true,
    },
    balance : {
        type: Number,
        required: true,
    },

});

const Accounts = mongoose.model("Accounts", accountSchema);

export {User, Accounts} ;