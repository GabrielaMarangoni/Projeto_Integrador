import FakesAddressesRepository from "../repositories/fakes/FakeAddressesRepository"
import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import CreateAddressesService from "./CreateAddressService";

let fakeAddressesRepository: FakesAddressesRepository;
let fakePlacesRepository: FakesPlacesRepository;
let createAddressService: CreateAddressesService;

describe('CreateAddress', () => {
    // Aqui foi declarado o que está no constructor de cada service
    beforeEach(() => {
        fakeAddressesRepository = new FakesAddressesRepository();
        fakePlacesRepository = new FakesPlacesRepository();

        createAddressService = new CreateAddressesService(
            fakeAddressesRepository,
            fakePlacesRepository
        );
    })

    it('should not be able to register a address (uuid invalid)', async () => {
        await expect(
            createAddressService.execute({
                city: 'Campo Mourão',
                state: 'PR',
                street: 'Rua do Jest',
                reference: 'Caixa dágua',
                places_id: 'lasanha'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be craete a address of the non-existing place', async () => {
        await expect(
            createAddressService.execute({
                city: 'Campo Mourão',
                state: 'PR',
                street: 'Rua do Jest',
                reference: 'Caixa dágua',
                places_id: '09a2bde8-b96a-40bd-91fe-06e996d19e4c'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be create a address of place', async () => {
        // criando o place
        const place = await fakePlacesRepository.create({
            name: 'Um lugar por aí'
        })

        await expect(
            createAddressService.execute({
                city: 'Campo Mourão',
                state: 'PR',
                street: 'Rua do Jest',
                reference: 'Caixa dágua',
                places_id: place.id
            })
        ).resolves.toBeInstanceOf(Object)
    })
})