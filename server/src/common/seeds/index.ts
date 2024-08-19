import { PrismaService } from '../database/prisma.service';
import { ProductsSeed } from './products.seed';
import { UsersSeed } from './users.seed';

const prisma = new PrismaService();

const main = async () => {
  console.log('Seeding data...');

  const usersSeed = new UsersSeed(prisma);
  const productsSeed = new ProductsSeed(prisma);
  await usersSeed.seed();
  await productsSeed.seed();
};

main().catch((err) => {
  console.warn('Error While generating Seed: \n', err);
});
