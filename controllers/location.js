//next steps: switch from user to location in the functions


//user model
const LocationModel = require('../models/schema')


//user controller
const LocationController = {
    //finds all location 
        index: function(req, res){
            LocationModel.LocationModel.find().then(location => {
                res.render('location/index', {user})
                // res.json(user)
            })
        },
    //goes to create new user route
        new: function(req, res){
            res.render('location/new')
        },
    //creates new user
        create: function(req,res){
            // LocationModel.create(req.body)
            const newUser = (req.body)
            LocationModel.LocationModel.create(newUser)
            .then((user) => {
                res.json(user)
            })
            // .then(() => res.redirect("/"))
        },
    //show one user by id
        show: function(req,res){
            LocationModel.LocationModel.findById(req.params.userId)
            // .then((user) => res.render('location/show', {
            //     user
            // })).catch(error => {
            //     console.log(error)
            // })
            .then((user) => {
                res.json(user)
            })
        },
        // // //find one user by id and edit user
        // edit: function(req,res){
        //     LocationModel.LocationModel.findById(req.params.userId)
        //         .then((user => res.render('location/edit', {user}))).catch(error => console.log(error))
        // },
        // //update one user by id
        update: function(req,res){
            LocationModel.LocationModel.findByIdAndUpdate(req.params.userId, req.body).then(() => {
                res.send()
            })
        },
        // //find user by id and remove user
        delete: function(req,res){
            LocationModel.LocationModel.findByIdAndDelete(req.params.userId).then((user) => {
                res.json(user)
                // res.redirect('/location').catch((error) => {
                //     console.log(error)
                // })
            })
        }
     
    }




module.exports = LocationController