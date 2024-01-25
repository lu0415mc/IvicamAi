import { Schema, model,models } from "mongoose";

const UserSchema = new Schema({
    
    email:{type:String, required:true},
    fullname:{type:String, required:true,}, 
    imgUrl:{type:String, required:true},
    targtedimg:{type:String, required:true},
})

const User = models.User || model('User',UserSchema);

export default User;