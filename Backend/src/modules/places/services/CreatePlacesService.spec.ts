/* import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import CreatePlacesService from "./CreatePlacesService";


let fakePlacesRepository: FakesPlacesRepository;
let createPlaceService: CreatePlacesService;

describe('CreatePlaces', () => {
    // Aqui declaramos o que está no constructor de cada service
    beforeEach(() => {
        fakePlacesRepository = new FakesPlacesRepository();

        createPlaceService = new CreatePlacesService(
            fakePlacesRepository
        );
    })

    it('should not be able to register a place (uuid invalid)', async () => {
        await expect(
            createPlaceService.execute({
                name: 'Praça das Flores',
                places_id: 'lasanha'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be craete a place of the non-existing place', async () => {
        await expect(
            createPlaceService.execute({
                name: '',
                places_id: '09a2bde8-b96a-40bd-91fe-06e996d19e4c'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be create a place of place', async () => {
        // criando o place
        const place = await fakePlacesRepository.create({
            name: 'Um lugar por aí'
        })

        await expect(
            createPlaceService.execute({
                name: 'Praça das Flores',
                places_id: place.id
            })
        ).resolves.toBeInstanceOf(Object)
    })
}) */