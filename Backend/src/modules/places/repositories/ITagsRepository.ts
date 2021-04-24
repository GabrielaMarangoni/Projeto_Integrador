import ICreateTagsDTO from "../dtos/ICreateTagsDTO";

export default interface ITagsRepository {
    create(data:ICreateTagsDTO): Promise<any>; 
}