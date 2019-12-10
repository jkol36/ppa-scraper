import mongoose from 'mongoose';



const customerSchema = mongoose.Schema({
	id: Number,
	created_at: String,
	updated_at: String,
	name: String
}, {strict:false})


export default mongoose.model('customers', customerSchema)