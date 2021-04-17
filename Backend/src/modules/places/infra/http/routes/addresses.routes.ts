import {Router} from 'express';
import AddressesControllers from '../controllers/addressesControllers';

const addressesControllers = new AddressesControllers();
const addressesRoutes = Router();

addressesRoutes.get('/one/:id', addressesControllers.index);
addressesRoutes.get('/all', addressesControllers.all );
addressesRoutes.post('/:places_id', addressesControllers.create );

export default addressesRoutes;