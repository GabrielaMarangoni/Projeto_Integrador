/* import FakesAddressesRepository from "../repositories/fakes/FakeAddressesRepository"
import FakesCommentaryRepository from "../repositories/fakes/FakeCommentaryRepository";
import FakesImagesRepository from "../repositories/fakes/FakeImagesRepository";
import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import FakesTagsRepository from "../repositories/fakes/FakeTagsRepository";
import CreateTotalPlaceService from "./CreateTotalPlaceService";

let fakeCommentaryRepository: FakesCommentaryRepository;
let fakeTagsRepository: FakesTagsRepository;
let fakeImagesRepository: FakesImagesRepository;
let fakeAddressesRepository: FakesAddressesRepository;
let fakePlacesRepository: FakesPlacesRepository;
let createTotalPlaceService: CreateTotalPlaceService;

describe('CreateTotalPlace', () => {
    // Aqui declaramos o que está no constructor de cada service
    beforeEach(() => {
        fakeCommentaryRepository = new FakesCommentaryRepository();
        fakeTagsRepository = new FakesTagsRepository();
        fakeImagesRepository = new FakesImagesRepository();
        fakeAddressesRepository = new FakesAddressesRepository();
        fakePlacesRepository = new FakesPlacesRepository();

        createTotalPlaceService = new CreateTotalPlaceService(
            fakeCommentaryRepository,
            fakeTagsRepository,
            fakeImagesRepository,
            fakeAddressesRepository,
            fakePlacesRepository
        );
    })

    it('should not be able to register a address (uuid invalid)', async () => {
        await expect(
            createTotalPlaceService.execute({
                name: '',
                city: '',
                state: '',
                street: '',
                reference: '',
                tags: '',
                images: '',
                commentary: ''
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be craete a address of the non-existing place', async () => {
        await expect(
            createTotalPlaceService.execute({
                name: '',
                city: '',
                state: '',
                street: '',
                reference: '',
                tags: '',
                images: '',
                commentary: ''
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be create a address of place', async () => {
        // criando o place
        const place = await fakePlacesRepository.create({
            name: 'Um lugar por aí'
        })

        await expect(
            createTotalPlaceService.execute({
                name: '',
                city: '',
                state: '',
                street: '',
                reference: '',
                tags: '',
                images: '',
                commentary: ''
            })
        ).resolves.toBeInstanceOf(Object)
    })
}) */