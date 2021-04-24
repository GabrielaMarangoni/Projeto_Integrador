import {Router} from 'express';
import PlacesControllers from '../controllers/placesControllers';

const placesControllers = new PlacesControllers();
const placesRoutes = Router();

placesRoutes.get('/search_city/:city', placesControllers.indexCity);
placesRoutes.get('/one/:id', placesControllers.index);
placesRoutes.get('/all', placesControllers.all );
placesRoutes.post('/total', placesControllers.total);
placesRoutes.post('/', placesControllers.create );

export default placesRoutes;