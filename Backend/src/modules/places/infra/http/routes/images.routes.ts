import {Router} from 'express';
import ImagesControllers from '../controllers/imagesControllers';

const imagesControllers = new ImagesControllers();
const imagesRoutes = Router();

imagesRoutes.get('/one/:id', imagesControllers.index);
imagesRoutes.get('/all', imagesControllers.all );
imagesRoutes.post('/:places_id', imagesControllers.create );

export default imagesRoutes;