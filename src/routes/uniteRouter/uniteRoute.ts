import { Router } from "express";
import { UniteController } from "../../controller/uniteController/uniteController";

const UniteRouter: Router = Router();

const uniteController: UniteController = new UniteController();

UniteRouter.get("/", uniteController.getAllUnites);
UniteRouter.get("/:id", uniteController.getUniteById);
UniteRouter.post("/", uniteController.createUnite);
UniteRouter.put("/:id", uniteController.updateUnite);
UniteRouter.delete("/:id", uniteController.deleteUnite);

export default UniteRouter;
