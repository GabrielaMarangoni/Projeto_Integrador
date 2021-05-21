import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import CreatePlacesService from "./CreatePlacesService";


let fakePlacesRepository: FakesPlacesRepository;
let createPlaceService: CreatePlacesService;

describe('CreatePlaces', () => {
    // Aqui foi declarado o que está no constructor de cada service
    beforeEach(() => {
        fakePlacesRepository = new FakesPlacesRepository();

        createPlaceService = new CreatePlacesService(
            fakePlacesRepository
        );
    })

    it('should be able to register a place', async () => {
        await expect(
            createPlaceService.execute({
                name: 'Praça das Flores'
            })
        ).resolves.toBeInstanceOf(Object)
    })
})