//user model
const UserModel = require('../models/schema')


//user controller
const UserController = {
    //finds all users 
        index: function(req, res){
            UserModel.UserModel.find().then(user => {
                res.render('users/index', {user})
                // res.json(user)
            })
        },
    //goes to create new user route
        new: function(req, res){
            res.render('users/new')
        },
    //creates new user
        create: function(req,res){
            // UserModel.create(req.body)
            const newUser = (req.body)
            UserModel.UserModel.create(newUser)
            .then((user) => {
                res.json(user)
            })
            // .then(() => res.redirect("/"))
        },
    //show one user by id
        show: function(req,res){
            UserModel.UserModel.findById(req.params.userId)
            // .then((user) => res.render('users/show', {
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
            UserModel.UserModel.findById(req.params.userId)
                .then((user => res.render('users/edit', {user}))).catch(error => console.log(error))
        },
        // //update one user by id
        update: function(req,res){
            UserModel.UserModel.findByIdAndUpdate(req.params.userId, req.body, {new:true}).then(() => {
                res.redirect('/' + req.params.userId)
            })
        },
        // //find user by id and remove user
        delete: function(req,res){
            UserModel.UserModel.findByIdAndDelete(req.params.userId).then((user) => {
                res.json(user)
                // res.redirect('/users').catch((error) => {
                //     console.log(error)
                // })
            })
        }
     
    }




module.exports = UserController