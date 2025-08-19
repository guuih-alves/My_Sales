import AppError from "@shared/errors/AppError";
import { productsRepositories } from "../database/repositories/ProductsRepositories";

interface IDeleteProduct {
    id: string;
}

export default class DeleteProductsService {
    static execute(arg0: { id: string; }) {
        throw new Error("Method not implemented.");
    }
    async execute({id}: IDeleteProduct): Promise<void> {
        const product = await productsRepositories.findById(id);

        if( !product) {
            throw new AppError('Product not found', 404);
        }

        await productsRepositories.remove(product);
    }
}