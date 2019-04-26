//user model
const UserModel = require('../models/user')


//user controller
const UserController = {
    index: function(req, res){
        UserModel.find().then(user => {
            res.json(user)
        })
    
     
    }



}

module.exports = UserController