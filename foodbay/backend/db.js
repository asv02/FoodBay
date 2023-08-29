const mongoose = require('mongoose');
const connectionURL = 'mongodb+srv://akash:akash@foodbay.dguzvky.mongodb.net/FoodBay?retryWrites=true&w=majority';

module.exports = async function () {
    try {
        await mongoose.connect(connectionURL, { useNewUrlParser: true });

        console.log("connected to database");

        const foodCollection = mongoose.connection.db.collection("Food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = mongoose.connection.db.collection("Food_category");
        const Catdata = await categoryCollection.find({}).toArray();
        global.food_items=data;
        global.food_category=Catdata;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};
