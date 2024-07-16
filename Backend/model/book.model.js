import mongoose from "mongoose";


const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    litre:String,
    c:String,
    image:String
})

const book = mongoose.model("Book",bookSchema)

export default book;