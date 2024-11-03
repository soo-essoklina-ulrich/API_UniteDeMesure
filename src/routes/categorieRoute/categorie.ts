import { CreateCategorie, DeleteCategorie, getCategoriebyId, getCategories, updateCategorie } from '../../controller/categorie';
import {Router} from 'express';

const CategorieRouter:Router = Router();


CategorieRouter.post('/', CreateCategorie);
CategorieRouter.get('/', getCategories);
CategorieRouter.get('/:id', getCategoriebyId);
CategorieRouter.put('/:id', updateCategorie);
CategorieRouter.delete('/:id', DeleteCategorie);

export default CategorieRouter;
