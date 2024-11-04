"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategorie = exports.updateCategorie = exports.getCategoriebyId = exports.getCategories = exports.CreateCategorie = void 0;
const app_1 = require("../app");
const CreateCategorie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { libelle } = req.body;
    let categorie = yield app_1.prismaClient.category.create({
        data: {
            libelle: String(libelle)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
});
exports.CreateCategorie = CreateCategorie;
const getCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let categorielist = yield app_1.prismaClient.category.findMany().catch((err) => { console.log(err); });
    res.json(categorielist);
});
exports.getCategories = getCategories;
const getCategoriebyId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let categorie = yield app_1.prismaClient.category.findUnique({
        where: {
            id: String(req.params.id)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
});
exports.getCategoriebyId = getCategoriebyId;
const updateCategorie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { libelle } = req.body;
    let categorie = yield app_1.prismaClient.category.update({
        where: {
            id: String(id)
        },
        data: {
            libelle: String(libelle)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
});
exports.updateCategorie = updateCategorie;
const DeleteCategorie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let categorie = yield app_1.prismaClient.category.delete({
        where: {
            id: String(id)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
});
exports.DeleteCategorie = DeleteCategorie;
//# sourceMappingURL=categorie.js.map