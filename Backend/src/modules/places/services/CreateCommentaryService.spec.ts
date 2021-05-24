import FakesCommentaryRepository from "../repositories/fakes/FakeCommentaryRepository";
import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import CreateCommentaryService from "./CreateCommentaryService";

let fakeCommentaryRepository: FakesCommentaryRepository;
let fakePlacesRepository: FakesPlacesRepository;
let createCommentaryService: CreateCommentaryService;

describe('CreateCommentary', () => {
     // Aqui foi declarado o que está no constructor de cada service
    beforeEach(() => {
        fakeCommentaryRepository = new FakesCommentaryRepository();
        fakePlacesRepository = new FakesPlacesRepository();

        createCommentaryService = new CreateCommentaryService(
            fakeCommentaryRepository,
            fakePlacesRepository
        );
    })

    it('should not be able to register a commentary (uuid invalid)', async () => {
        await expect(
            createCommentaryService.execute({
                commentary: 'lindo',
                places_id: 'lasanha'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be craete a commentary of the non-existing place', async () => {
        await expect(
            createCommentaryService.execute({
                commentary: 'lindo',
                places_id: '09a2bde8-b96a-40bd-91fe-06e996d19e4c'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be create a commentary of place', async () => {
        // criando o place
        const place = await fakePlacesRepository.create({
            name: 'Um lugar por aí'
        })

        await expect(
            createCommentaryService.execute({
                commentary: 'lindo',
                places_id: place.id
            })
        ).resolves.toHaveProperty("id")
    })
})