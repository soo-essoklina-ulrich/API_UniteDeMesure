import { Response, Request, NextFunction } from "express";
import { UniteServices } from "../../services/UniteServices";

export class UniteController {
  private uniteServices: UniteServices = new UniteServices();

  public getAllUnites = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const unites = await this.uniteServices.getUnites();
      res.status(200).json(unites);
    } catch (error) {
      next(error);
    }
  };

  public getUniteById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const unite = await this.uniteServices.getUnitebyId(req.params.id);
      res.status(200).json(unite);
    } catch (error) {
      next(error);
    }
  };

  public createUnite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const unite = await this.uniteServices.createUnite(req.body);
      res.status(201).json(unite);
    } catch (error) {
      res.status(400).json({ message: error });
      next(error);
    }
  };

  public updateUnite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const unite = await this.uniteServices.updateUnite(
        req.params.id,
        req.body
      );
      res.status(200).json(unite);
    } catch (error) {
      next(error);
    }
  };

  public deleteUnite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.uniteServices.deleteUnite(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
}
