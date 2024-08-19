"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSeed = void 0;
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
class ProductsSeed {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async seed() {
        await this.prisma.product.deleteMany();
        for (let i = 0; i < 300; i++) {
            await this.prisma.product.create({
                data: {
                    name: faker_1.faker.commerce.productName(),
                    price: parseFloat(faker_1.faker.commerce.price()).toFixed(2),
                    status: client_1.Status.PENDING,
                },
            });
        }
    }
}
exports.ProductsSeed = ProductsSeed;
//# sourceMappingURL=products.seed.js.map