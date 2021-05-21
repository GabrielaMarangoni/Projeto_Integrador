import { Request, Response } from 'express';
import CreateCommentaryService from '../../../services/CreateCommentaryService';
import CommentaryRepository from '../../repositories/CommentaryRepository';
import PlacesRepository from '../../repositories/PlacesRepository';
const Commentary = require('../../sequelize/entities/commentary.js');

export default class AddressesControllers {
    public async index(req: Request, res: Response) {
        try {           
            const { id } = req.params;

            const commentary1 = await Commentary.findByPk(id, {
                include: { association: 'places' }
            });

            return res.json(commentary1);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async all(req: Request, res: Response) {
        try {
            const commentary1 = await Commentary.findAll({
                include: { association: 'places' }
            });

            return res.json(commentary1);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async create(req: Request, res: Response) {
        try {
            const { places_id } = req.params;
            const { commentary } = req.body;

            const createCommentaryService = new CreateCommentaryService(
                new CommentaryRepository(), 
                new PlacesRepository()
            )
            const commentary1 = await createCommentaryService.execute({
                commentary,
                places_id
            })

            return res.json(commentary1);
        } catch (err) {
            return res.status(400).json({ error: err.message })

        }
    }
}