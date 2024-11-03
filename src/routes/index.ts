import {Router} from 'express';
import CategorieRouter from './categorieRoute/categorie';
const rootRouter:Router =  Router();

rootRouter.use('/cat', CategorieRouter);

export default rootRouter;
