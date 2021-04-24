import ICreateCommentaryDTO from "../dtos/ICreateCommentaryDTO";

export default interface IAddressesRepository {
    create(data:ICreateCommentaryDTO): Promise<any>; 
}