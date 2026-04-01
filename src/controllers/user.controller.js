import {asyncHandler} from '../utils/asyncHandler.js';
import {User} from "../models/user.model.js"
import { DB_NAME } from '../constants.js';
import {apiError} from "../utils/apiError.js";
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import {apiResponse} from "../utils/apiResponse.js"

const registerUser = asyncHandler( async (req,res)=>{
    console.log("Register user controller executed");
    console.log(req.body);
    const {fullName,username,email,password}=req.body;
    //DB_NAME.User.insertOne()
    // get user details{
    // Username --> MONGO_DB
    // email --> MONGO_DB
    // fullName --> MONGO_DB
    // avatar --> multer -->cloudinary
    // coverImage --> multer --> cloudinary
    // password --> encript(bcrypt) --> MONGO_DB
    // refreshToken(JWT)}
    if([fullName,username,email,password].some(field => field.trim() === "")){
        throw new apiError(400,"field is empty");
    }

    const isUserPresent = await User.findOne({
        $or:[{username},{email}]
    });

    if(isUserPresent){
        throw new apiError(400,"User already exists with the given username or email");
    }
    /* check validations{
        is any of field is empty
        is the email format is correct
        check if user already exists:username,email

    }
    */
   console.log("All validations passed");
   console.log(req.files);
   const avtarLocalPath = req.files.avatar[0].path;
   const coverImageLocalPath = "";

   if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files?.coverImage[0].path;
   }
   
   if(!avtarLocalPath){
    throw new apiError(400,"Avtar not found");
   }

   const avtarUrl= await uploadOnCloudinary(avtarLocalPath); //response as URL
   const coverImageUrl = await uploadOnCloudinary(coverImageLocalPath); //response as URL

   if(!avtarUrl){
    throw new apiError(400,"Avtar not found");
   }
   /*

    check for images,check for avtar
    upload them to cloudanary through multer
    take response from cloudanary as url of the file
    store the url in mongoDB
    check wheather the user is successfully registered
    */

    const data={username,
        fullName,
        password,
        email,
        avtar:avtarUrl.url,
        coverImage:coverImageUrl?.url || ""
    };
    console.log("Data to be stored in DB",data);
    const CreatedUser = await User.create(data);
    console.log("Created user in DB",CreatedUser);

    User.findById(CreatedUser._id).select("-password -refreshToken").then(()=>{
        console.log("User is successfully registerd");
        res.status(201).json(new apiResponse(201,"User is successfully registerd",CreatedUser));
    }).catch((error)=>{
        console.log("Failed to register user",error.message);
        throw new apiError(500,"Failed to register user");
    })
})

export {registerUser};