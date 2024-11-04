"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uniteController_1 = require("../../controller/uniteController/uniteController");
const UniteRouter = (0, express_1.Router)();
const uniteController = new uniteController_1.UniteController();
UniteRouter.get("/", uniteController.getAllUnites);
UniteRouter.get("/:id", uniteController.getUniteById);
UniteRouter.post("/", uniteController.createUnite);
UniteRouter.put("/:id", uniteController.updateUnite);
UniteRouter.delete("/:id", uniteController.deleteUnite);
exports.default = UniteRouter;
//# sourceMappingURL=uniteRoute.js.map