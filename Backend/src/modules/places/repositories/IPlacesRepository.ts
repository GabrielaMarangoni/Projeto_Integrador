import ICreatePlacesDTO from "../dtos/ICreatePlacesDTO";

export default interface IPlacesRepository {
    create(data:ICreatePlacesDTO): Promise<any>; 
    findById(id: string): Promise<any | null>;
}