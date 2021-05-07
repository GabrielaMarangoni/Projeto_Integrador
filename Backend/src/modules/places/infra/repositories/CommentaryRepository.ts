//Nesse repositório irá acontecer a interação com o banco de dados
import ICreateCommentaryDTO from "../../dtos/ICreateCommentaryDTO";
import ICommentaryRepository from "../../repositories/ICommentaryRepository";

const Commentary = require('../sequelize/entities/commentary.js');

class CommentaryRepository implements ICommentaryRepository {
    public async create(data: ICreateCommentaryDTO): Promise<any> {
        const commentary = await Commentary.create(data);
        return commentary;
    }
}

export default CommentaryRepository;