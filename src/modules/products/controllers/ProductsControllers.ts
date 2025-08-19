import CreateProductService from "../services/CreateProductService";
import ListProductService from "../services/ListProductService";
import { Request, Response } from "express";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";
import DeleteProductsService from "../services/DeleteProductsService";

export default class ProductsControllers {
    async index(request: Request, response: Response): Promise<Response>{
        const listProductsService = new ListProductService();
        const products = await ListProductService.execute();
        return response.json(products);
    }

    async show(request: Request, response: Response): Promise<Response>{
        const { id} = request.params;
        const showProductService = new ShowProductService();
        const product = await ShowProductService.execute({id});
        return response.json(product);
        
    }

    async create(request: Request, response: Response): Promise<Response>{
        const { name, price, quantity} = request.body;
        const createProductService = new CreateProductService();
        const product = await createProductService.execute({
            name,
            price,
            quantity
        });
        return response.json(product);
    }

    async update (request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const {name, price, quantity} = request.body;
        const updateProductService = new UpdateProductService();
        const product = await UpdateProductService.execute({
            id,
            name,
            price,
            quantity,
        });
        return response.json(product)
}

    async delete (request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const deleteProductsService = new DeleteProductsService();
        await DeleteProductsService.execute({id});
        return response.status(204).send([])
    }
}