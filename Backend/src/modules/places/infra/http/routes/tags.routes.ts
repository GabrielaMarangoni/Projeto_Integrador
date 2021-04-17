import {Router} from 'express';
import TagsControllers from '../controllers/tagsControllers';

const tagsControllers = new TagsControllers();
const tagsRoutes = Router();

tagsRoutes.get('/one/:id', tagsControllers.index);
tagsRoutes.get('/all', tagsControllers.all );
tagsRoutes.post('/:places_id', tagsControllers.create );

export default tagsRoutes;