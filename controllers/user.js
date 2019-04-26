//user model
const UserModel = require('../models/user')


//user controller
const UserController = {
    //finds all users 
        index: function(req, res){
            UserModel.find().then(user => {
                res.render('users/index', {
                    user
                }).catch(error => {
                    console.log(error)
                })
            })
        },
    //goes to create new user route
        new: function(req, res){
            res.render('users/new')
        },
    //creates new user
        create: function(req,res){
            UserModel.create(req.body)
            .then(() => res.redirect("/"))
            .catch((error) => {
                console.log(error)
            })
        },
    //show one user by id
        show: function(req,res){
            UserModel.findById(req.params.userId)
            .then((user) => res.render('users/show', {
                user
            })).catch(error => {
                console.log(error)
            })
        },
        //find one user by id and edit user
        edit: function(req,res){
            UserModel.findById(req.params.userId)
                .then((user => res.render('users/edit', {user}))).catch(error => console.log(error))
        },
        //update one user by id
        update: function(req,res){
            UserModel.findByIdAndUpdate(req.params.userId, req.body, {new:true}).then(() => {
                res.redirect('/' + req.params.userId)
            })
        },
        //find user by id and remove user
        delete: function(req,res){
            UserModel.findByIdAndRemove(req.params.userId).then(() => {
                res.redirect('/users').catch((error) => {
                    console.log(error)
                })
            })
        }
     
    }




module.exports = UserController