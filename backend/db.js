import mongoose from "mongoose";

const mongoURI = `mongodb+srv://sahilahamed813:sahil653t@cluster0.w1xfhoi.mongodb.net/food_delivery_cluster?retryWrites=true&w=majority&appName=Cluster0`

const connectToDatabase = async () => {
    try{
        await mongoose.connect(mongoURI)
        console.log("Connected to MongoDB successfully");
        const fetched_data = await mongoose.connection.db.collection('food_items').find({}).toArray();
        // console.log(fetched_data);
        
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
    }
    
}

export default connectToDatabase;