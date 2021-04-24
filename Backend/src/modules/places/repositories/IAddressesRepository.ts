import ICreateAddressDTO from "../dtos/ICreateAddressDTO";

export default interface IAddressesRepository {
    create(data:ICreateAddressDTO): Promise<any>; 
}