import productsRouter from "@modules/products/routes/ProductRoutes";
import sessionRouter from "@modules/users/routes/SessionRoutes";
import usersRouter from "@modules/users/routes/UserRoutes";
import { Router } from "express";


const routes = Router();

routes.get('/health', (request, response) => {
    return response.json ({ message: 'Hello De ! I am alive'});
});

routes.use('/products', productsRouter)
routes.use('/users', usersRouter )
routes.use('/session', sessionRouter)

export default routes;