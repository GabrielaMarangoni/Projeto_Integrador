import FakesAddressesRepository from "../repositories/fakes/FakeAddressesRepository"
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
            fakePlacesRepository,
            fakeAddressesRepository,
            fakeImagesRepository,
            fakeTagsRepository,
            fakeCommentaryRepository
        );
    })

    it('should be create a total place', async () => {
        await expect(
            createTotalPlaceService.execute({
                name: 'Jardim',
                city: 'Campo Mourão',
                state: 'PR',
                street: 'Rua 1',
                reference: 'Perto dalí',
                tags: 'FLORES, NATUREZA',
                images: 'https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg, https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg',
                commentary: 'Esse é um lugar'
            })
        ).resolves.toHaveProperty("id")
    })
})