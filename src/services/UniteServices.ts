import { prismaClient } from "../app";

export class UniteServices {
  public async createUnite(data: any) {
    let unite = await prismaClient.unitCategory
      .create({
        data: {
          category: String(data.category),
          mainUnit: String(data.mainUnit),
          units: {
            create: data.units.map((unit: string) => ({ name: unit })),
          },
        },
      })
      .catch((err) => {
        console.log(err);
      });
    return unite;
  }
  public async getUnites() {
    let unitelist = await prismaClient.unitCategory.findMany().catch((err) => {
      console.log(err);
    });
    return unitelist;
  }
  public async getUnitebyId(id: string) {
    let unite = await prismaClient.unitCategory
      .findUnique({
        where: {
          id: id,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    return unite;
  }
  public async updateUnite(id: string, data: any) {
    if (
      id !== undefined &&
      data !== undefined &&
      id !== null &&
      data !== null
    ) {
      if (id === data.id) {
        let unite = await prismaClient.unitCategory
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
  }
  public async deleteUnite(id: string) {
    let unite = await prismaClient.unitCategory
      .delete({
        where: {
          id: id,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    return unite;
  }
}
