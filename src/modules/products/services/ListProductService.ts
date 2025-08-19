import { Product } from "../database/entities/Product";
import { productsRepositories } from "../database/repositories/ProductsRepositories";

export default class ListProductService {
    static execute() {
        throw new Error("Method not implemented.");
    }
    async execute(): Promise<Product[]>{
        const product = await productsRepositories.find();
        return product;
    }
}