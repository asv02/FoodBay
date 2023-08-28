const mongoose=require('mongoose');
//destructuring
const {Schema}=mongoose;
//A Mongoose model is a wrapper around a MongoDB collection and provides an interface for interacting with the data in that collection.
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

// when you call mongoose.model('user', userSchema), you are telling Mongoose to create or access a collection named "users" (pluralized version of "user"), and the structure of the documents in that collection should adhere to the userSchema.
module.exports=mongoose.model('user',userSchema);
// 'user' ->This is the name of the collection you want to create or access. Mongoose will typically pluralize the name and convert it to lowercase, so "user" here would typically refer to a collection named "users" in the database.
//userSchema: This is the Mongoose schema that defines the structure and validation rules for the documents in the "user" collection. 