var mongoose = require('mongoose')
var User = mongoose.model('User')

console.log("I am at the users Controller-Backend")

function UsersController() {

    this.createUser = function(req, res) {
        User.findOne({ name: req.body.name }, function(err, name) {
            if (err) {
                res.json(err)
            } else {
                if (name == null) {
                    var newUser = User({ name: req.body.name })
                    newUser.save(function(newerr) {
                        if (newerr) {
                            res.json(newerr)
                        } else {
                            res.json(newUser)
                        }
                    })
                } else {
                    res.json(name)
                }
            }
        })
    }

    
    this.getUser = function(req, res) {
        User.find({}).populate('_user').exec(function(err, users) {
            if (err) {
                res.json(err)
            } else {
                res.json(users)
            }
        })
    }









}

module.exports = new UsersController();
