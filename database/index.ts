import mongoose from 'mongoose';
const DATABASE_URL = process.env.DATABASE_URL
let cached = (global as any).mongoose || {conn:null ,promise:null };

export const connectToDatabase = async ()=>{
    if(cached.conn) return cached.conn;
    if(!DATABASE_URL) throw new Error("db_url is not connected");
    cached.promise = cached.promise || mongoose.connect(DATABASE_URL,{
        dbName:"IvicamAi",
        bufferCommands:false
    })
    cached.conn = await cached.promise;
    return cached.conn;
}