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
exports.UniteServices = void 0;
const app_1 = require("../app");
class UniteServices {
    createUnite(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let unite = yield app_1.prismaClient.unitCategory
                .create({
                data: {
                    category: String(data.category),
                    mainUnit: String(data.mainUnit),
                    units: {
                        create: [
                            {
                                name: data.units.map((unit) => ({ name: unit })),
                            },
                        ],
                    },
                },
            })
                .catch((err) => {
                console.log(err);
            });
            return unite;
        });
    }
    getUnites() {
        return __awaiter(this, void 0, void 0, function* () {
            let unitelist = yield app_1.prismaClient.unitCategory.findMany().catch((err) => {
                console.log(err);
            });
            return unitelist;
        });
    }
    getUnitebyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let unite = yield app_1.prismaClient.unitCategory
                .findUnique({
                where: {
                    id: id,
                },
            })
                .catch((err) => {
                console.log(err);
            });
            return unite;
        });
    }
    updateUnite(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id !== undefined &&
                data !== undefined &&
                id !== null &&
                data !== null) {
                if (id === data.id) {
                    let unite = yield app_1.prismaClient.unitCategory
                        .update({
                        where: {
                            id: id,
                        },
                        data: {
                            category: String(data.category),
                            mainUnit: String(data.mainUnit),
                        },
                    })
                        .catch((err) => {
                        console.log(err);
                    });
                    return unite;
                }
                return null;
            }
        });
    }
    deleteUnite(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let unite = yield app_1.prismaClient.unitCategory
                .delete({
                where: {
                    id: id,
                },
            })
                .catch((err) => {
                console.log(err);
            });
            return unite;
        });
    }
}
exports.UniteServices = UniteServices;
//# sourceMappingURL=UniteServices.js.map