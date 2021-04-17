import { isUuid } from "uuidv4";
import ICreateAddressesDTO from "../dtos/ICreateAddressDTO";
import IAddressesRepository from "../repositories/IAddressesRepository";
import IPlacesRepository from "../repositories/IPlacesRepository";

class CreateAddressesService {
    constructor(
        private addressesRepository: IAddressesRepository,
        private placesRepository: IPlacesRepository
    ) {}

    public async execute({ 
        city,
        state,
        street,
        reference,
        places_id
     }: ICreateAddressesDTO): Promise<any> { 
        const place_idIsUuid = isUuid(places_id);

        if(!place_idIsUuid) {
            throw new Error('This place_id is not uuid');
        }

        const existPlace = await this.placesRepository.findById(places_id);

        if(!existPlace) {
            throw new Error('This place not exist!');
        }

        const address = await this.addressesRepository.create({ 
            city,
            state,
            street,
            reference,
            places_id
         });

        return address;
    }
}

export default CreateAddressesService;