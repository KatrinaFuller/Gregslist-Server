import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  hours: { type: Number, required: true },
  rate: { type: Number, required: true },
  description: { type: String, required: true }
}, { timestamps: true })

export default class JobService {
  get repository() {
    return mongoose.model('job', _model)
  }
}