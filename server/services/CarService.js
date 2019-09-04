import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  imgUrl: { type: String, default: 'https://placehold.it/200x200' },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true }
}, { timestamps: true })

export default class CarService {
  get repository() {
    return mongoose.model('car', _model)
  }
}