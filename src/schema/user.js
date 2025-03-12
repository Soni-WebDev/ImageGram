import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true,
        minLength: 5
    },
    email:{
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: function(email) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
            },
            message: 'Invalid email format'
        },
    },
    password:{
        type: String,
        require: true,
        minLength: 6
    },
},{timestamps:true});
//  timestamps:true :   by adding this, 2 more properties add to the db. createAt and updateAt. this can be done automatically

const user = mongoose.model("user", userSchema); // user collection

export default user;