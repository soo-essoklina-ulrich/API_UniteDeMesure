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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// seed.ts
const { PrismaClient } = require('@prisma/client');
const fs_1 = __importDefault(require("fs"));
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = JSON.parse(fs_1.default.readFileSync('src/public/json/unite.json', 'utf8'));
        // Ajout des unités de mesure 
        for (const unit of data.units) {
            const category = yield prisma.UnitCategory.create({
                data: {
                    category: unit.category,
                    mainUnit: unit.main_unit,
                    units: {
                        create: unit.units.map((unit) => ({ name: unit }))
                    }
                }
            });
            console.log('Seed data has been added:', category);
        }
    });
}
main()
    .catch(e => {
    console.error(e);
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map