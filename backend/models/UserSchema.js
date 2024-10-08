import mongoose from "mongoose"

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        requried:true,
    },
    phone:{
        type:Number,
    },
    photo:{
        type:String,
    },
    role:{
        type:String,
        enum:["patient","admin"],
        default:"patient",
    },

    gender:{
        type:String,
        enum:["male","female","other"]
    },
    bloodType:{
        type:String,
    },
    
    appointment:[{
        type:mongoose.Types.ObjectId,
        ref:"Appointment",
    }]
});

export default mongoose.model("User",UserSchema);