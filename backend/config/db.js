import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arshverma:arsh552004@cluster0.bkjejiv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
