import ICreateTotalPlacesDTO from "../dtos/ICreateTotalPlacesDTO";
import IAddressesRepository from "../repositories/IAddressesRepository";
import ICommentaryRepository from "../repositories/ICommentaryRepository";
import IImagesRepository from "../repositories/IImagesRepository";
import IPlacesRepository from "../repositories/IPlacesRepository";
import ITagsRepository from "../repositories/ITagsRepository";

const Places = require('../infra/sequelize/entities/places.js')

class CreateTotalPlacesService {
    constructor(
        private placesRepository: IPlacesRepository,
        private addressesRepository: IAddressesRepository,
        private imagesRepository: IImagesRepository,
        private tagsRepository: ITagsRepository,
        private commentaryRepository: ICommentaryRepository
    ) {}

    public async execute({ 
        name,
        city,
        state,
        street,
        reference,
        tags,
        images,
        commentary
     }: ICreateTotalPlacesDTO): Promise<any> {
        const new_tags =  tags.split(',');
        const new_images = images.split(',');
        
        const place = await this.placesRepository.create({ name });
        await this.addressesRepository.create({
            city,
            state,
            street,
            reference,
            places_id: place.id
        });
        await this.commentaryRepository.create({
            commentary,
            places_id: place.id
        })
        for(var qtd = 0; qtd < new_tags.length; qtd++){
            await this.tagsRepository.create({
                // trim = remove os espaços em brancos
                tag: new_tags[qtd].trim(),
                places_id: place.id
            })
        }
        for(var qtd = 0; qtd < new_images.length; qtd++){
            await this.imagesRepository.create({
                // trim = remove os espaços em brancos
                image: new_images[qtd].trim(),
                places_id: place.id
            })
        }
        
        return { id: place.id }
    }
}

export default CreateTotalPlacesService;