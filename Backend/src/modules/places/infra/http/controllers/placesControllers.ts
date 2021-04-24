import { Request, Response } from 'express';
import CreatePlacesService from '../../../services/CreatePlacesService';
import CreateTotalPlacesService from '../../../services/CreateTotalPlaceService';
import AddressesRepository from '../../repositories/AddressesRepository';
import CommentaryRepository from '../../repositories/CommentaryRepository';
import ImagesRepository from '../../repositories/ImagesRepository';
import PlacesRepository from '../../repositories/PlacesRepository';
import TagsRepository from '../../repositories/TagsRepository';

const Places = require('../../sequelize/entities/places.js');

export default class PlacesControllers {
    public async indexCity(req: Request, res: Response) {
        try {
            const { city } = req.params;

            const places = await Places.findAll({
                include: [
                    { association: 'address' },
                    { association: 'tags' },
                    { association: 'images' },
                    { association: 'commentary' }
                ],
            })

            let places_search = places.filter((el: any) => el.address && el.address.dataValues.city === city)

            return res.json(places_search);
        } catch(err) {
            return res.status(404).json({ error:err.message })
        }
    }

    public async index(req: Request, res: Response) {
        try {
            // localhost:3333/places/ESSE_É_O_ID
            const { id } = req.params;

            const place = await Places.findByPk(id, {
                include: [
                    { association: 'address' },
                    { association: 'tags' },
                    { association: 'images' },
                    { association: 'commentary' }
                ]
            });

            return res.json(place);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async all(req: Request, res: Response) {
        try {
            const places = await Places.findAll({
                include: [
                    { association: 'address' },
                    { association: 'tags' },
                    { association: 'images' },
                    { association: 'commentary' }
                ]
            });

            return res.json(places);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const { name } = req.body;

            const createPlacesService = new CreatePlacesService(new PlacesRepository);
            const place = await createPlacesService.execute({ name });

            return res.json(place);
        } catch (err) {
            return res.status(400).json({ error: err })

        }
    }

    public async total(req: Request, res: Response) {
        try {
            const { name, city, state, street, reference, tags, images, commentary } = req.body;

            const createPlacesService = new CreateTotalPlacesService(
                new PlacesRepository(),
                new AddressesRepository(),
                new ImagesRepository(),
                new TagsRepository(),
                new CommentaryRepository()
                );
            const place = await createPlacesService.execute({ 
                name,  
                city, 
                state, 
                street, 
                reference, 
                tags,
                images,
                commentary
            });

            return res.json(place);
        } catch (err) {
            return res.status(400).json({ error: err })

        }
    }


}