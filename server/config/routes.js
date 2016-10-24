console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){


	app.post('/createUser', users.createUser)
	app.get('/get_user', users.getUser)
	app.post('/add_post', users.addPost)
	app.get('/get_post', users.getPost)
	// app.get('/getWishByUser/:_user', users.getWishByUser)

}

//routes describe connection btw front end and backend ..
