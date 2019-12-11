import mongoose from 'mongoose';



const locationSchema = mongoose.Schema({
    id: Number,
    created_at: String,
    updated_at: String,
    name: String,
    address: String,
    location: String,
    comment: String,
    url: String
})



export default mongoose.model('locations', locationSchema);