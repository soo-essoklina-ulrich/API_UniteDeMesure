import { Router } from "express";
import CategorieRouter from "./categorieRoute/categorie";
import UniteRouter from "./uniteRouter/uniteRoute";
const rootRouter: Router = Router();

rootRouter.use("/cat", CategorieRouter);
rootRouter.use("/unite", UniteRouter);

export default rootRouter;
