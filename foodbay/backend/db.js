const mongoose = require('mongoose');
const connectionURL = 'mongodb+srv://akash:akash@foodbay.dguzvky.mongodb.net/FoodBay?retryWrites=true&w=majority';
//we are running index.js using nodemon,means to run db.js functions,it need to exported to index.js,for that we made an arrow function.
const mongodb = async () => {
    //connect returns a promise so it may take some time so make function using async and await.
    // try-catch to catch unwanted errors.
    try {
        await mongoose.connect(connectionURL);
        console.log('connection made.');
        const fetched_data = await mongoose.connection.db.collection("Food_items");
        
        const data=await fetched_data.find({}).toArray();//we want all the data so {} inside find.
        
        //this try-catch is for data fetching.
        try{
            console.log(data);
        }
        catch(error){
            console.log("Error occured during fetching and converting to array. ");
        }
    }
    catch(error) {
        console.log('Error occured during connection to database.')
    }
}

module.exports = mongodb;

