//GreenItem model
const Models = require('../models/schema')
const UserModel = require('../models/schema')



//GreenItem controller
const GreenItemController = {
    //finds all GreenItems 
        index: function(req, res){
            Models.UserModel.findById(req.params.userId)
            //     // res.render('greenItem/index', {greenItem})
            // })
            .then((user) => {
                res.json(user)
            })
        },
    //goes to create new GreenItem route
        new: function(req, res){
            res.render('greenItem/new')
            // res.json()
        },
    //creates new GreenItem
        create: function(req,res){
            const userId = req.params.userId;
            const newGreenItem = (req.body)
            Models.UserModels.findById(userId)
            .then((user) => {
                user.where.push(newGreenItem)
            })
            .then((user) => {
                 res.redirect(`/user/${userId}`)
            })
        },
    //show one GreenItem by id
        show: function(req,res){
            Models.GreenItemModel.findById(req.params.greenItemId)
            // .then((greenItem) => res.render('greenItem/show', {
            //     greenItem
            // })).catch(error => {
            //     console.log(error)
            // })
            .then((greenItem) => {
                res.json(greenItem)
            })
        },
        // //find one GreenItem by id and edit GreenItem
        edit: function(req,res){
            Models.GreenItemModel.findById(req.params.greenItemId)
                .then((greenItem => res.render('greenItem/edit', {greenItem}))).catch(error => console.log(error))
        },
        // //update one GreenItem by id
        update: function(req,res){
            Models.GreenItemModel.findByIdAndUpdate(req.params.greenItemId, req.body).then(() => {
                res.json(req.body)
            })
        },
        // //find GreenItem by id and remove GreenItem
        delete: function(req,res){
            Models.GreenItemModel.findByIdAndDelete(req.params.greenItemId).then((greenItem) => {
                res.json(greenItem)
                // res.redirect('/greenItems').catch((error) => {
                //     console.log(error)
                // })
            })
        }
     
    }


module.exports = GreenItemController