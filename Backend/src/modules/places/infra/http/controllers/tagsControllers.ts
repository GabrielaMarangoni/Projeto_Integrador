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
   
    public async all_exist(req: Request, res: Response) {
        try {
            const tags = await Tags.findAll();

            var name_tags: string[] = tags.map((tag: any) => tag.tag);
            var array = name_tags;
            var new_array = array.filter(function(a, b) {
                return array.indexOf(a) === b
            });

            return res.json(new_array);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    // criou um metodo chamado search e pegou os parametros das tags. 
    public async search(req: Request, res: Response) {
        try {
            // localhost:3333/tags/ESSE_É_O_ID
            const { tags } = req.params;

            const tag = await Tags.findAll({
                include: { association: 'places' },
                where: {
                    tag: tags
                } 
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