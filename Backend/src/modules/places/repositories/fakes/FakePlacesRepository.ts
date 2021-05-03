import { uuid } from "uuidv4";
import ICreatePlacesDTO from "../../dtos/ICreatePlacesDTO";
import IPlacesRepository from "../IPlacesRepository";

export default class FakesPlacesRepository implements IPlacesRepository {
    private places: any[] = [];
  
    public async findById(id: string): Promise<any | null> {
        const place = this.places.find(el => el.id === id);
        return place || null;
    }

    public async create(data:ICreatePlacesDTO): Promise<any> {
        const placeObject = new Object;

        Object.assign(placeObject, {
            id: uuid(),
            name: data.name
        })

        this.places.push(placeObject);
        return placeObject;
    }
}

