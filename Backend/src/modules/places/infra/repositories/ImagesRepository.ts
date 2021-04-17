//Nesse repositório irá acontecer a interação com o banco de dados
import ICreateImagesDTO from "../../dtos/ICreateImagesDTO";
import IImagesRepository from "../../repositories/IImagesRepository";

const Images = require('../sequelize/entities/images.js');

class ImagesRepository implements IImagesRepository {
    public async create(data: ICreateImagesDTO): Promise<any> {
        const image = await Images.create(data);
        return image;
    }
    
}

export default ImagesRepository;