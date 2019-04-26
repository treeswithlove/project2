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
    post: function(req,res){
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
    }
     
    }



}

module.exports = UserController