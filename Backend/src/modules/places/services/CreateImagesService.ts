import { isUuid } from "uuidv4";
import ICreateImagesDTO from "../dtos/ICreateImagesDTO";
import IImagesRepository from "../repositories/IImagesRepository";
import IPlacesRepository from "../repositories/IPlacesRepository";


class CreateImagesService {
    constructor(
        private imagesRepository: IImagesRepository,
        private placesRepository: IPlacesRepository
    ) {}

    public async execute({ 
        image,
        places_id
     }: ICreateImagesDTO): Promise<any> { 
        const place_idIsUuid = isUuid(places_id);

        if(!place_idIsUuid) {
            throw new Error('This place_id is not uuid');
        }

        const existPlace = await this.placesRepository.findById(places_id);

        if(!existPlace) {
            throw new Error('This place not exist!');
        }

        const created_image = await this.imagesRepository.create({ 
            image,
            places_id
         });

        return created_image;
    }
}

export default CreateImagesService;