const mongoose = require('../db/connection')
const LocationSchema = require('./location')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const GreenItemSchema = new Schema({
    userid: ObjectId,
    name: String,
    what: String,
    how: String,
    where: [ LocationSchema ]
})

const GreenItemModel = mongoose.Model('GreenItem', GreenItemSchema )

module.exports = GreenItemModel