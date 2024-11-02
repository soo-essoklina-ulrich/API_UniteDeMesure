import {Response, Request, NextFunction} from 'express';
import { prismaClient } from '../app';


export const CreateCategorie = async (req: Request, res: Response, next: NextFunction) => {
    let {libelle} = req.body;
    console.log(req.body);
    let categorie = await  prismaClient.category.create({
        data: {
            libelle: String(libelle)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
}
export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    let categorielist = await  prismaClient.category.findMany().catch((err) => {});
    res.json(categorielist);
}
export const getCategoriebyId = async (req: Request, res: Response, next: NextFunction) => {
    let categorie = await  prismaClient.category.findUnique({
        where: {
            id: String(req.params.id)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
}
export const updateCategorie = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const {libelle} = req.body;
    let categorie = await  prismaClient.category.update({
        where: {
            id: String(id)
        },
        data: {
            libelle: String(libelle)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
}
export const DeleteCategorie = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    let categorie = await  prismaClient.category.delete({
        where: {
            id: String(id)
        }
    }).catch((err) => {
        console.log(err);
    });
    res.json(categorie);
}
