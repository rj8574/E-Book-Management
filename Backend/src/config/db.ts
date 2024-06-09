import mongoose from "mongoose";
import { config } from "./config";


const connectDb = async()=>{
    
    try {
        mongoose.connection.on('connected',()=>{
            console.log(`Connection to Database Successfully`);
            
        })
        mongoose.connection.on('error',(err)=>{
            console.log(`Error in Connecting to Database`,err);
            
        })
        await mongoose.connect(config.databaseUrl as string)
      
    } catch (error) {
        console.error(`Failed to connect to Database`,error);
        process.exit(1);
        
        
    }
}
export default connectDb;