import { uuid } from "uuidv4";
import ICreateImagesDTO from "../../dtos/ICreateImagesDTO";
import IImagesRepository from "../IImagesRepository";

export default class FakesImagesRepository implements IImagesRepository {
    private images: any[] = [];

    public async create(data:ICreateImagesDTO): Promise<any> {
        const imagesObject = new Object;

        Object.assign(imagesObject, {
            id: uuid(),
            image: data.image,
            places_id: data.places_id
        })

        this.images.push(imagesObject);
        return imagesObject;
    }
}

