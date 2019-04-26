const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const LocationSchema = new Schema({
    name: String,
    address: String,
    hours: String
})

const LocationModel = mongoose.model('Location', LocationSchema)

module.exports = {LocationModel}