import { isUuid } from "uuidv4";
import ICreateTagsDTO from "../dtos/ICreateTagsDTO";
import IPlacesRepository from "../repositories/IPlacesRepository";
import ITagsRepository from "../repositories/ITagsRepository";

class CreateTagsService {
    constructor(
        private tagsRepository: ITagsRepository,
        private placesRepository: IPlacesRepository
    ) {}

    public async execute({ 
        tag,
        places_id
     }: ICreateTagsDTO): Promise<any> { 
        const place_idIsUuid = isUuid(places_id);

        if(!place_idIsUuid) {
            throw new Error('This place_id is not uuid');
        }

        const existPlace = await this.placesRepository.findById(places_id);

        if(!existPlace) {
            throw new Error('This place not exist!');
        }

        const created_tag = await this.tagsRepository.create({ 
            tag,
            places_id
         });

        return created_tag;
    }
}

export default CreateTagsService;