//Nesse repositório irá acontecer a interação com o banco de dados
import ICreateTagsDTO from "../../dtos/ICreateTagsDTO";
import ITagsRepository from "../../repositories/ITagsRepository";

const Tags = require('../sequelize/entities/tags.js');

class TagsRepository implements ITagsRepository {
    public async create(data: ICreateTagsDTO): Promise<any> {
        const tag = await Tags.create(data);
        return tag;
    }
    
}

export default TagsRepository;