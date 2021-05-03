import { uuid } from "uuidv4";
import ICreateAddressDTO from "../../dtos/ICreateAddressDTO";
import IAddressesRepository from "../IAddressesRepository";

export default class FakesAddressesRepository implements IAddressesRepository {
    private addresses: any[] = [];
  
    public async create(data:ICreateAddressDTO): Promise<any> {
        const addressObject = new Object;

        Object.assign(addressObject, {
            id: uuid(),
            city: data.city,
            state: data.state,
            street: data.street,
            reference: data.reference,
        })

        this.addresses.push(addressObject);
        return addressObject;
    }
}

