import ICreateImagesDTO from "../dtos/ICreateImagesDTO";

export default interface IImagesRepository {
    create(data:ICreateImagesDTO): Promise<any>; 
}