import FakesImagesRepository from "../repositories/fakes/FakeImagesRepository";
import FakesPlacesRepository from "../repositories/fakes/FakePlacesRepository";
import CreateImagesService from "./CreateImagesService";

let fakeImagesRepository: FakesImagesRepository;
let fakePlacesRepository: FakesPlacesRepository;
let createImageService: CreateImagesService;

describe('CreateImages', () => {
    // Aqui foi declarado o que está no constructor de cada service
    beforeEach(() => {
        fakeImagesRepository = new FakesImagesRepository();
        fakePlacesRepository = new FakesPlacesRepository();

        createImageService = new CreateImagesService(
            fakeImagesRepository,
            fakePlacesRepository
        );
    })

    it('should not be able to register an image (uuid invalid)', async () => {
        await expect(
            createImageService.execute({
                image: 'https://www.sbjconstrutora.com.br/img/navegantes-2.jpg' ,
                places_id:'pipoca'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should not be craete an image of the non-existing place', async () => {
        await expect(
            createImageService.execute({
                image:'https://www.sbjconstrutora.com.br/img/navegantes-2.jpg',
                places_id: '09a2bde8-b96a-40bd-91fe-06e996d19e4c'
            })
        ).rejects.toBeInstanceOf(Error)
    })

    it('should be create an image of place', async () => {
        // criando o place
        const place = await fakePlacesRepository.create({
            name: 'Navegantes'
        })

        await expect(
            createImageService.execute({
                image: 'https://www.sbjconstrutora.com.br/img/navegantes-2.jpg' ,
                places_id: place.id
            })
        ).resolves.toBeInstanceOf(Object)
    })
})