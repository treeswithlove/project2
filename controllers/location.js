//user model
const LocationModel = require('../models/schema')


//user controller
const LocationController = {
    //finds all location 
        index: function(req, res){
            LocationModel.LocationModel.find().then(location => {
                res.render('location/index', {location})
                // res.json(user)
            })
        },
    //goes to create new location route
        new: function(req, res){
            res.render('location/new')
        },
    //creates new location
        create: function(req,res){
            // LocationModel.create(req.body)
            const newLocation = (req.body)
            LocationModel.LocationModel.create(newLocation)
            .then((location) => {
                res.json(location)
            })
            // .then(() => res.redirect("/"))
        },
    //show one location by id
        show: function(req,res){
            LocationModel.LocationModel.findById(req.params.locationId)
            // .then((user) => res.render('location/show', {
            //     user
            // })).catch(error => {
            //     console.log(error)
            // })
            .then((location) => {
                res.json(location)
            })
        },
        // // //find one user by id and edit user
        // edit: function(req,res){
        //     LocationModel.LocationModel.findById(req.params.userId)
        //         .then((user => res.render('location/edit', {user}))).catch(error => console.log(error))
        // },
        // //update one location by id
        update: function(req,res){
            LocationModel.LocationModel.findByIdAndUpdate(req.params.locationId, req.body).then(() => {
                res.send()
            })
        },
        // //find location by id and remove location
        delete: function(req,res){
            LocationModel.LocationModel.findByIdAndDelete(req.params.locationId).then((location) => {
                res.json(location)
                // res.redirect('/location').catch((error) => {
                //     console.log(error)
                // })
            })
        }
     
    }




module.exports = LocationController