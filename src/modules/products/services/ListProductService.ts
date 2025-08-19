import { Product } from "../database/entities/Product";
import { productsRepositories } from "../database/repositories/ProductsRepositories";

export default class ListProductService {
    async execute(): Promise<Product[]>{
        const product = await productsRepositories.find();
        return product;
    }
}