import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    contact:{
        type: Number,
        required : true

    },
    email:{
        type: String,
        required : true
    },
    remark:{
        type: String,
        required : true
    }
})

export default mongoose.model("contactusform",userSchema);