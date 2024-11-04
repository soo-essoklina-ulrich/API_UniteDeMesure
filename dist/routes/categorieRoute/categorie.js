"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categorie_1 = require("../../controller/categorie");
const express_1 = require("express");
const CategorieRouter = (0, express_1.Router)();
CategorieRouter.post('/', categorie_1.CreateCategorie);
CategorieRouter.get('/', categorie_1.getCategories);
CategorieRouter.get('/:id', categorie_1.getCategoriebyId);
CategorieRouter.put('/:id', categorie_1.updateCategorie);
CategorieRouter.delete('/:id', categorie_1.DeleteCategorie);
exports.default = CategorieRouter;
//# sourceMappingURL=categorie.js.map