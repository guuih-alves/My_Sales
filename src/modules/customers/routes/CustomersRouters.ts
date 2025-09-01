import { Router } from "express";
import CustomerControllers from "../controllers/CustomerControllers";
import AuthMiddleware from "@shared/middlewares/authMiddleware";
import { createCustomerSchma, idParamsValidade, updateCustomerSchema } from "../schemas/CustomerSchema";

const customerRouter = Router();
const customersController = new CustomerControllers();


customerRouter.get('/', customersController.index);
customerRouter.get('/:id', idParamsValidade, customersController.show);
customerRouter.post('/', createCustomerSchma, customersController.create);
customerRouter.patch(
    '/:id',
    idParamsValidade,
    updateCustomerSchema,
    customersController.update,
);

customerRouter.delete('/:id', idParamsValidade, customersController.delete);

export default customerRouter;
