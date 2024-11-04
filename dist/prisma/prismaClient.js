"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
let prisma;
if (process.env.NODE_ENV === "production") {
    prisma = new client_1.PrismaClient();
}
else {
    // Eviter de créer plusieurs instances de Prisma en développement
    if (!global.prisma) {
        global.prisma = new client_1.PrismaClient();
    }
    prisma = global.prisma;
}
exports.default = prisma;
//# sourceMappingURL=prismaClient.js.map