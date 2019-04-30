//schema models
const Models = require('../models/schema')
const GreenItemModel = Models.GreenItemModel;
const LocationItemModel = Models.LocationModel;
const UserModel = Models.UserModel;

//clear all users, locations, greenItems
Models.remove({}, (error) => {
    console.log(error)
});

//create users for User Model
const user1 = new UserModel({name: 'Childish Gambino', age: 34, email: 'cgambino@gmail.com'})

//create greenItems for GreenItem Model

//create locations for Location Model


//save to db
