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

  async create(req, res, next) {
    try {
      let car = await _carService.create(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let car = await _carService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (car) {
        return res.send(car)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await _carService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted value")
    } catch (error) {
      next(error)
    }
  }
}