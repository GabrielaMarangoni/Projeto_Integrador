import { Request, Response } from 'express';
import CreateTagsService from '../../../services/CreateTagsService';
import PlacesRepository from '../../repositories/PlacesRepository';
import TagsRepository from '../../repositories/TagsRepository';
const Tags = require('../../sequelize/entities/tags.js');

export default class TagsControllers {
    public async index(req: Request, res: Response) {
        try {
            // localhost:3333/tags/ESSE_É_O_ID
            const { id } = req.params;

            const tag = await Tags.findByPk(id, {
                include: { association: 'places' }
            });

            return res.json(tag);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async all(req: Request, res: Response) {
        try {
            const tag = await Tags.findAll({
                include: { association: 'places' }
            });

            return res.json(tag);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async create(req: Request, res: Response) {
        try {
            const { places_id } = req.params;
            const { tag } = req.body;

            const createTagsService = new CreateTagsService(
                new TagsRepository(),
                new PlacesRepository()
            );
            const tags = await createTagsService.execute({
                tag,
                places_id
            })

            return res.json(tags);
        } catch (err) {
            return res.status(400).json({ error: err.message })
        }
    }
}