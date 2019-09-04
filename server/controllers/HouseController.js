import express from 'express'
import HouseService from '../services/HouseService';

let _houseService = new HouseService().repository

export default class HouseController {
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
      let house = await _houseService.find({})
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let house = await _houseService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let house = await _houseService.create(req.body)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let house = await _houseService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (data) {
        return res.send(house)
      }
    } catch (error) {

    }
  }

  async delete(req, res, next) {
    try {
      await _houseService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted house")
    } catch (error) {
      next(error)
    }
  }
}