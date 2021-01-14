const ClientModel = require('../model/ClientModel')
import {Request, Response} from 'express';

class ClientController{
  async getAll(req: Request, res: Response){
    await ClientModel.find()
    .then((response: Response) => {
      return res.status(200).json(response);
    })
    .catch((error: Error) => {
      return res.status(500).json(error);
    });
  }

  async create(req: Request, res: Response){
    const client = new ClientModel(req.body);
    await client
    .save()
    .then((response: Response) => {
      return res.status(200).json(response);
    })
    .catch((error: Error) => {
      return res.status(500).json(error);
    });
  }

  async update(req: Request, res: Response){
    await ClientModel.findByIdAndUpdate(
      { _id: req.params.id }, 
      req.body, 
      { new: true }
    )
    .then((response: Response) => {
      return res.status(200).json(response);
    })
    .catch((error: Error) => {
      return res.status(500).json(error);
    });
  }

  async delete(req: Request, res: Response){
    await ClientModel.deleteOne(
      { _id: req.params.id}
    )
    .then((response: Response) => {
      return res.status(200).json(response);
    })
    .catch((error: Error) => {
      return res.status(500).json(error);
    });
  }
}

module.exports = new ClientController();