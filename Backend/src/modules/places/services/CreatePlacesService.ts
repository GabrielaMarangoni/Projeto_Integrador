import ICreatePlacesDTO from "../dtos/ICreatePlacesDTO";
import IPlacesRepository from "../repositories/IPlacesRepository";

class CreatePlacesService {
    constructor(
        private placesRepository: IPlacesRepository
    ) {}

    public async execute({ name }: ICreatePlacesDTO): Promise<any> { 
        const place = await this.placesRepository.create({ name });
        return place;
    }
}

export default CreatePlacesService;