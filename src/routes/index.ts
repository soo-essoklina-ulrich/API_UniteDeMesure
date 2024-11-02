import {NextFunction, Request, Response, Router} from 'express';
import CategorieRouter from './categorieRoute/categorie';
const rootRouter:Router =  Router();

/* GET home page. */
rootRouter.get('/', function(req:Request, res:Response, next:NextFunction) {
  res.render('index', { title: 'Express' });
});

rootRouter.use('/cat', CategorieRouter);



export default rootRouter;
