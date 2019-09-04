import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  imgUrl: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  levels: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, required: true }
} { timestamps: true })

export default class HouseService {
  get repository() {
    return mongoose.model('house', _model)
  }
}