const mongoose = require('../db/connection.js')
const GreenItemSchema = require('../models/greenItem')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String
    // email: String,
    // age: Number,
    // greenItems: [GreenItemSchema]
})

const UserModel = mongoose.model("User", UserSchema)


module.exports =  UserModel