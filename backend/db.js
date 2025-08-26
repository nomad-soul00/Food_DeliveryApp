import mongoose from "mongoose";

const mongoURI = `mongodb+srv://sahilahamed813:sahil653t@cluster0.w1xfhoi.mongodb.net/food_delivery_cluster?retryWrites=true&w=majority&appName=Cluster0`

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected to MongoDB successfully");
        const fetched_data = await mongoose.connection.db.collection('food_items').find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection('food_category').find({}).toArray();
        global.food_items = fetched_data;
        global.food_category = foodCategory;
        // console.log(global.food_items);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

}

export default connectToDatabase;