//Nesse repositório irá acontecer a interação com o banco de dados
import ICreatePlacesDTO from "../../dtos/ICreatePlacesDTO";
import IPlacesRepository from "../../repositories/IPlacesRepository";

const Places = require('../sequelize/entities/places.js');

class PlacesRepository implements IPlacesRepository {
    public async create(data: ICreatePlacesDTO): Promise<any> {
        const place = await Places.create(data);
        return place;
    }

    public async findById(id: string): Promise<any | null> {
        const place = await Places.findByPk(id);
        return place;
    }
}

export default PlacesRepository;