import express from 'express'
import CarService from '../services/CarService';


let _carService = new CarService().repository

export default class CarController {
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
      let car = await _carService.find({})
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let car = await _carService.findById(req.params.id)
      if (!car) {
        throw new Error("Invalid Car")
      }
      res.send(car)
    } catch (error) {
      next(error)
    }
  }
}