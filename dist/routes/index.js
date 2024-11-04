"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorie_1 = __importDefault(require("./categorieRoute/categorie"));
const uniteRoute_1 = __importDefault(require("./uniteRouter/uniteRoute"));
const rootRouter = (0, express_1.Router)();
rootRouter.use("/cat", categorie_1.default);
rootRouter.use("/unite", uniteRoute_1.default);
exports.default = rootRouter;
//# sourceMappingURL=index.js.map