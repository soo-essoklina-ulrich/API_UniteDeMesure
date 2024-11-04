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
exports.UniteController = void 0;
const UniteServices_1 = require("../../services/UniteServices");
class UniteController {
    constructor() {
        this.uniteServices = new UniteServices_1.UniteServices();
        this.getAllUnites = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const unites = yield this.uniteServices.getUnites();
                res.status(200).json(unites);
            }
            catch (error) {
                next(error);
            }
        });
        this.getUniteById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const unite = yield this.uniteServices.getUnitebyId(req.params.id);
                res.status(200).json(unite);
            }
            catch (error) {
                next(error);
            }
        });
        this.createUnite = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const unite = yield this.uniteServices.createUnite(req.body);
                res.status(201).json(unite);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateUnite = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const unite = yield this.uniteServices.updateUnite(req.params.id, req.body);
                res.status(200).json(unite);
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteUnite = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.uniteServices.deleteUnite(req.params.id);
                res.status(204).end();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UniteController = UniteController;
//# sourceMappingURL=uniteController.js.map