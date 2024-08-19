"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSeed = void 0;
const faker_1 = require("@faker-js/faker");
class UsersSeed {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async seed() {
        await this.prisma.product.deleteMany();
        await this.prisma.user.deleteMany();
        for (let i = 0; i < 300; i++) {
            await this.prisma.user.create({
                data: {
                    name: faker_1.faker.person.firstName(),
                    email: faker_1.faker.internet.email(),
                },
            });
        }
    }
}
exports.UsersSeed = UsersSeed;
//# sourceMappingURL=users.seed.js.map