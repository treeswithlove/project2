//user model
const Models = require('../models/schema')


//user controller
const UserController = {
    //finds all users 
        index: function(req, res){
            Models.UserModel.find().then(user => {
                // res.render('user/index', {user})
                res.json(user)
            })
        },
    //goes to create new user route
        new: function(req, res){
            res.render('user/new')
        },
    //creates new user
        create: function(req,res){
            const newUser = req.body;
            Models.UserModel.create(newUser => {
                Promise.all(Models.GreenItemModel.find(), 
                Models.GreenItemModel.map(green) => {

                })
            })
            // UserModel.create(req.body)
            // const newUser = (req.body)
            // Models.UserModel.create(newUser)
            // .then((newUser) => {
                // Promise.all
                // res.json(newUser)
            // })
            // .then(() => res.redirect("/"))
        },
    //show one user by id
        show: function(req,res){
            Models.UserModel.findById(req.params.userId)
            // .then((user) => res.render('user/show', {
            //     user
            // })).catch(error => {
            //     console.log(error)
            // })
            .then((user) => {
                res.json(user)
            })
        },
        // //find one user by id and edit user
        edit: function(req,res){
            Models.UserModel.findById(req.params.userId)
                .then((user => res.render('user/edit', {user}))).catch(error => console.log(error))
        },
        // //update one user by id
        update: function(req,res){
            Models.UserModel.findByIdAndUpdate(req.params.userId, req.body).then(() => {
                res.send()
            })
        },
        // //find user by id and remove user
        delete: function(req,res){
            Models.UserModel.findByIdAndDelete(req.params.userId).then((user) => {
                res.json(user)
                // res.redirect('/users').catch((error) => {
                //     console.log(error)
                // })
            })
        }
     
    }


module.exports = UserController