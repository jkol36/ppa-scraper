import mongoose from 'mongoose';


const badgeSchema = mongoose.Schema({
    id: Number,
    name: String,
    badge_number: Number,
    location: {
      id: Number,
      name: String,
      address: String,
      comment: String,
      location: String,
      created_at: String,
      updated_at: String
    },
    customer: {
      id: Number,
      name: String,
      address1: String,
      address2: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
      phone1: String,
      phone2: String,
      fax: String,
      email: String,
      status: String,
      invoice_preference: String,
      customer_type_id: Number,
      created_at: String,
      updated_at: String,
      legacy_key: String,
      contract_number: String,
      location_id: Number,
      address3: String
    }
  },{strict:false})


export default mongoose.model('badges', badgeSchema)