import mongoose from "mongoose"

const dbConnect= async()=> {
    try {
        const conn= await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to DB`);
    } catch (error) {
        console.error(`Error connecting to DB: ${error.message}`);
        process.exit(1);
    }
}

export default dbConnect;