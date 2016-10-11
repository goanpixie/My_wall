console.log("I am in the model-->post.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var PostSchema = new mongoose.Schema({
_user: [{type: Schema.Types.ObjectId, ref: 'User'}],

    
    topic : {
    type:String,
    required: [true, "Topic is required"],
    trim: true,
    minlength: [5," Title must be atleast 5 letters"]
  },

  description: {
    type:String,
    required: [true, "Descripton is required"],
    trim: true,
    minlength: [10,"Description must be atleast 10 letters"],
  },

  category: {
    type: String,
}
}
,{timestamps:true})


var Post = mongoose.model('Post', PostSchema)
