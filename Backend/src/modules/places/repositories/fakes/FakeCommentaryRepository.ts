import ICreateCommentaryDTO from "../../dtos/ICreateCommentaryDTO";
import ICommentaryRepository from "../ICommentaryRepository";

export default class FakesCommentaryRepository implements ICommentaryRepository {
    private commentary: any[] = [];

    public async create(data:ICreateCommentaryDTO): Promise<any> {
        const commentaryObject = this.commentary.push(data);
        return commentaryObject;
    }
}

