import { uuid } from "uuidv4";
import ICreateTagsDTO from "../../dtos/ICreateTagsDTO";
import ITagsRepository from "../ITagsRepository";

export default class FakesTagsRepository implements ITagsRepository {
    private tags: any[] = [];

    public async create(data:ICreateTagsDTO): Promise<any> {
        const tagObject = new Object;

        Object.assign(tagObject, {
            id: uuid(),
            tag: data.tag
        })

        this.tags.push(tagObject);
        return tagObject;
    }
}

