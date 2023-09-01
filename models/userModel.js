const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add a username"]
    },
    email:{
        type:String,
        required:[true,"please add user email id"],
        unique:[true,"this email has already been registered"]
    },
    password:{
        type:String,
        required:[true,"please add the user password"]
    }
},{
    timestamps:true,
});
module.exports=mongoose.model("User",userSchema);