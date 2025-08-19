import { Router } from "express";
import ProductsControllers from "../controllers/ProductsControllers";
import routes from "@shared/http/routes";

const productsRouter = Router();
const productsController = new ProductsControllers();

productsRouter.get('/', productsController.index); 
productsRouter.get('/:id', productsController.show);
 productsRouter.post('/', productsController.create);
  productsRouter.put('/:id', productsController.update); 
  productsRouter.delete('/:id', productsController.delete);
  
   export default productsRouter;