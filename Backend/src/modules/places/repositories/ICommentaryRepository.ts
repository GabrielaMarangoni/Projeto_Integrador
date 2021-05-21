import ICreateCommentaryDTO from "../dtos/ICreateCommentaryDTO";

export default interface ICommentaryRepository {
    create(data:ICreateCommentaryDTO): Promise<any>; 
}