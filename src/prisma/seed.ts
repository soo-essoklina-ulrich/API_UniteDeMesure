// seed.ts
const { PrismaClient } = require('@prisma/client');
import fs from 'fs';
const prisma = new PrismaClient();

async function main() {

  const data = JSON.parse(fs.readFileSync('src/public/json/unite.json', 'utf8'));
  // Ajout des unités de mesure 
  for (const unit of data.units){
    const category = await prisma.UnitCategory.create({
      data: {
        category: unit.category,
        mainUnit: unit.main_unit,
        units: {
          create: unit.units.map((unit:string) => ({name: unit}))
        }
      }
    });
     console.log('Seed data has been added:', category);
  }

 
}

main()
  .catch(e => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });