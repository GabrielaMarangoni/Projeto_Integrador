//Nesse repositório irá acontecer a interação com o banco de dados
import ICreateAddressDTO from "../../dtos/ICreateAddressDTO";
import IAddressesRepository from "../../repositories/IAddressesRepository";

const Addresses = require('../sequelize/entities/addresses.js');

class AddressesRepository implements IAddressesRepository {
    public async create(data: ICreateAddressDTO): Promise<any> {
        const address = await Addresses.create(data);
        return address;
    }

}

export default AddressesRepository;