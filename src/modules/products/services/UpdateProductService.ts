import AppError from "@shared/errors/AppError";
import { Product } from "../database/entities/Product"
import { productsRepositories } from "../database/repositories/ProductsRepositories";

interface IUpdateProduct{
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export default class UpdateProductService{
    static execute(arg0: { id: string; name: any; price: any; quantity: any; }) {
        throw new Error("Method not implemented.");
    }
    async execute({ id, name, price, quantity }: IUpdateProduct): Promise<Product>{
        const product = await productsRepositories.findById(id);

        if(!product){
            throw new AppError('Product not found', 404)
        }

            const productExists = await productsRepositories.findByName(name);

            if(productExists){
                throw new AppError('There is alreadt one product with this name' , 409);
            }

            product.name= name;
            product.price = price;
            product.quantity = quantity;

            await productsRepositories.save(product);

            return product;

    }
}