import express from 'express'
import JobService from '../services/JobService'

let _jobService = new JobService().repository

export default class JobController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let job = await _jobService.find({})
      return res.send(job)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let job = await _jobService.findById(req.params.id)
      if (!job) {
        throw new Error("Invalid Id")
      }
      res.send(job)
    } catch (error) {
      next(error)
    }
  }


}