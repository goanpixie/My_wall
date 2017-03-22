var mongoose = require('mongoose')
var User = mongoose.model('User')
var Post = mongoose.model('Post')

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

     this.addPost = function(req, res) {
        console.log(req.body)
        var newPost = Post({ _user: req.body.userid, topic: req.body.topic, description: req.body.description, category: req.body.category })
        console.log(newPost)
        newPost.save(function(err) {
            if (err) {
                res.json(err)
            } else {
                User.findOne({ _id: req.body.userid, name: req.body.name }, function(err, user) {
                    if (err) {
                        res.json(err)
                    } else {
                        user._post.push(newPost)
                        user.save(function(err) {
                            if (err) {
                                res.json(err)
                            } else {
                                   res.send()
                                        }
                                    })
                                }
                            })
                        }
                    })
            }



    this.getPost = function(req, res) {
        Post.find({}).populate('_post').exec(function(err, posts) {
            if (err) {
                res.json(err)
            } else {
                res.json(posts)
            }
        })
    }










}

module.exports = new UsersController();
