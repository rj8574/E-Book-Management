import { v2 as cloudinary } from 'cloudinary';
import { config } from './config';


    // Configuration
    cloudinary.config({ 
        cloud_name:  config.cloudinaryCloud, 
        api_key: config.cloudinaryApiKey, 
        api_secret: config.cloudinaryApiSecret,  // Click 'View Credentials' below to copy your API secret
    });
    
    // Upload an image
  
export default cloudinary;