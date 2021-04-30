import {Router} from 'express';
import TagsControllers from '../controllers/tagsControllers';

const tagsControllers = new TagsControllers();
const tagsRoutes = Router();

tagsRoutes.get('/one/:id', tagsControllers.index);
tagsRoutes.get('/all', tagsControllers.all );
tagsRoutes.get('/all_filter', tagsControllers.all_exist );
tagsRoutes.get('/search/:tags', tagsControllers.search);
tagsRoutes.post('/:places_id', tagsControllers.create );

export default tagsRoutes;