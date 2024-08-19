import { faker } from '@faker-js/faker';
import { PrismaService } from '../database/prisma.service';
import { Status } from '@prisma/client';

export class ProductsSeed {
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    await this.prisma.product.deleteMany();
    for (let i = 0; i < 300; i++) {
      await this.prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          price: parseFloat(faker.commerce.price()).toFixed(2),
          status: Status.PENDING,
        },
      });
    }
  }
}
