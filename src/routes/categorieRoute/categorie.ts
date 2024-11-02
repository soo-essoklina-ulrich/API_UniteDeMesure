import { CreateCategorie, DeleteCategorie, getCategoriebyId, getCategories, updateCategorie } from '../../controller/categorie';
import {Router} from 'express';

const CategorieRouter:Router = Router();


CategorieRouter.post('/', CreateCategorie);
CategorieRouter.get('/', getCategories);
CategorieRouter.get('/:id', getCategoriebyId);
CategorieRouter.get('/:id', updateCategorie);
CategorieRouter.get('/:id', DeleteCategorie);

export default CategorieRouter;
