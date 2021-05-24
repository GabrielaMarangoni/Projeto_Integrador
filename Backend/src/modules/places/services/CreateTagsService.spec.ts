import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import FakesTagsRepository from "../repositories/fakes/FakeTagsRepository";
import CreateTagsService from "./CreateTagsService";

let fakeTagsRepository: FakesTagsRepository;
let fakePlacesRepository: FakesPlacesRepository;
let createTagService: CreateTagsService;

describe('CreateTag', () => {
    // Aqui foi declarado o que está no constructor de cada service
    beforeEach(() => {
        fakeTagsRepository = new FakesTagsRepository();
        fakePlacesRepository = new FakesPlacesRepository();

        createTagService = new CreateTagsService(
            fakeTagsRepository,
            fakePlacesRepository
        );
    })

    it('should not be able to register a tag (uuid invalid)', async () => {
        await expect(
            createTagService.execute({
                tag: 'PRAIA',
                places_id: 'brigadeiro'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be craete a tag of the non-existing place', async () => {
        await expect(
            createTagService.execute({
                tag: 'PRAIA',
                places_id: '09a2bde8-b96a-40bd-91fe-06e996d19e4c'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be create a tag of place', async () => {
        // Criando o place
        const place = await fakePlacesRepository.create({
            name: 'Um lugar por aí'
        })

        await expect(
            createTagService.execute({
                tag: 'PRAIA ',
                places_id: place.id
            })
        ).resolves.toBeInstanceOf(Object)
    })
})