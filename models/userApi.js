const mongoose = require('../../db/connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId;


const Location = mongoose.Schema({
    name: String,
    address: String,
    hours: String
})

const GreenItem = mongoose.Schema({
    userid: ObjectId,
    name: String,
    what: String,
    how: String,
    where: [ Location ]
})

const User = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    greenItems: [GreenItem]
})

const LocationModel = mongoose.model("Location", Location)
const GreenItemModel = mongoose.model("GreenItem", GreenItem)
const UserModel = mongoose.model("User", User)


module.exports =  {
    LocationModel, UserModel, GreenItemModel

}