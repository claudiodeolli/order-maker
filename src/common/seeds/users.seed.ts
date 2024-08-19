import { faker } from '@faker-js/faker';
import { PrismaService } from '../database/prisma.service';

export class UsersSeed {
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    await this.prisma.product.deleteMany();
    await this.prisma.user.deleteMany();
    for (let i = 0; i < 300; i++) {
      await this.prisma.user.create({
        data: {
          name: faker.person.firstName(),
          email: faker.internet.email(),
        },
      });
    }
  }
}
