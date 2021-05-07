import { Request, Response } from 'express';
import CreateAddressesService from '../../../services/CreateAddressService';
import AddressesRepository from '../../repositories/AddressesRepository';
import PlacesRepository from '../../repositories/PlacesRepository';
const Addresses = require('../../sequelize/entities/addresses.js');

export default class AddressesControllers {
    public async index(req: Request, res: Response) {
        try {
           
            const { id } = req.params;

            const address = await Addresses.findByPk(id, {
                include: { association: 'places' }
            });

            return res.json(address);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async all(req: Request, res: Response) {
        try {
            const address = await Addresses.findAll({
                include: { association: 'places' }
            });

            return res.json(address);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    
    public async create(req: Request, res: Response) {
        try {
            const { places_id } = req.params;
            const { city, state, street, reference } = req.body;

            const createAddressesService = new CreateAddressesService(
                new AddressesRepository(), 
                new PlacesRepository()
            )
            const address = await createAddressesService.execute({
                city,
                state,
                street,
                reference,
                places_id
            })

            return res.json(address);
        } catch (err) {
            return res.status(400).json({ error: err.message })

        }
    }
}