import mongoose from 'mongoose';


export const batchReceiptSchema = mongoose.Schema({
    id: Number,
    name: String,
    display_name: String,
    description: String,
    paramaters: Array,

}, {strict: false})

export default mongoose.model('batchReceipts', batchReceiptSchema);