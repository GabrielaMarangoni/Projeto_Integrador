import { Request, Response } from 'express';
import CreateImagesService from '../../../services/CreateImagesService';
import ImagesRepository from '../../repositories/ImagesRepository';
import PlacesRepository from '../../repositories/PlacesRepository';
const Images = require('../../sequelize/entities/images.js');

export default class ImagesControllers {
    public async index(req: Request, res: Response) {
        try {
           
            const { id } = req.params;

            const images = await Images.findByPk(id, {
                include: { association: 'places' }
            });

            return res.json(images);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async all(req: Request, res: Response) {
        try {
            const image = await Images.findAll({
                include: { association: 'places' }
            });

            return res.json(image);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async create(req: Request, res: Response) {
        try {
            const { places_id } = req.params;
            const { image } = req.body;

            const createImagesService = new CreateImagesService(
                new ImagesRepository(),
                new PlacesRepository()
          )
            const images= await createImagesService.execute({
                image,
                places_id
            })
            return res.json(images);
        } catch (err) {
            return res.status(400).json({ error: err.message })
        }
    }
}