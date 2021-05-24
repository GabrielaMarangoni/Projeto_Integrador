import { Router} from 'express';
import addressesRoutes from '../../../../modules/places/infra/http/routes/addresses.routes';
import commentaryRoutes from '../../../../modules/places/infra/http/routes/commentary.routes';
import imagesRoutes from '../../../../modules/places/infra/http/routes/images.routes';
import placesRoutes from '../../../../modules/places/infra/http/routes/places.routes';
import tagsRoutes from '../../../../modules/places/infra/http/routes/tags.routes';

const routes = Router();
// get = Buscar algo
// post = Criar algo
// put = Atualizar alto
// delete = Deletar algo
routes.get('/', (req, res) => {
    return res.json({name: "Turistando"})
})

routes.use('/places', placesRoutes)
routes.use('/addresses', addressesRoutes)
routes.use('/tags', tagsRoutes)
routes.use('/images', imagesRoutes)
routes.use('/commentary', commentaryRoutes)

export default routes;