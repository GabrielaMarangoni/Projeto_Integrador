import { isUuid } from "uuidv4";
import ICreateCommentaryDTO from "../dtos/ICreateCommentaryDTO";
import ICommentaryRepository from "../repositories/ICommentaryRepository";
import IPlacesRepository from "../repositories/IPlacesRepository";

class CreateCommentaryService {
    constructor(
        private commentaryRepository: ICommentaryRepository,
        private placesRepository: IPlacesRepository
    ) {}

    public async execute({ 
        commentary,
        places_id
     }: ICreateCommentaryDTO): Promise<any> { 
        const place_idIsUuid = isUuid(places_id);

        if(!place_idIsUuid) {
            throw new Error('This place_id is not uuid');
        }

        const existPlace = await this.placesRepository.findById(places_id);

        if(!existPlace) {
            throw new Error('This place not exist!');
        }

        const commentary1 = await this.commentaryRepository.create({ 
            commentary,
            places_id
         });

        return { id: commentary1.id }
    }
}

export default CreateCommentaryService;