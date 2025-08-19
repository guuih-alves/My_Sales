import AppError from "@shared/errors/AppError";
import { productsRepositories } from "../database/repositories/ProductsRepositories";
import { Product } from "../database/entities/Product";

interface IShowProduct{
    id: string;
}

export default class ShowProductService {
    static execute(arg0: { id: string; }) {
        throw new Error("Method not implemented.");
    }
    async execute ({ id} : IShowProduct): Promise<Product>{
        const product = await productsRepositories.findById(id)

        if(!product){
            throw new AppError('Product not found', 404)
        }

        return product;
    }
}