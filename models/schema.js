const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
    name: String,
    address: String,
    hours: String
})

const LocationModel = mongoose.model('Location', LocationSchema)


const ObjectId = mongoose.Schema.Types.ObjectId;

const GreenItemSchema = new Schema({
    userid: ObjectId,
    name: String,
    what: String,
    how: String,
    where: [ LocationSchema ]
})

const GreenItemModel = mongoose.model('GreenItem', GreenItemSchema )

const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    greenItems: [GreenItemSchema]
})

const UserModel = mongoose.model("User", UserSchema)


module.exports =  { UserModel, LocationModel, GreenItemModel}