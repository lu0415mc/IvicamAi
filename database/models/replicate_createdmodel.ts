import { Schema, model,models } from "mongoose";

const UserSchema = new Schema({
    
    email:{type:String, required:true},
    fullname:{type:String, required:true}, 
    createdUrl:{type:String, required:true},
    
})

const Created = models.Created || model('Created',UserSchema);

export default Created;