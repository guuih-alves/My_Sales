import { Router } from "express";
import { request } from "http";

const routes = Router();

routes.get('/health', (request, response) => {
    return response.json ({ message: 'Hello De ! I am alive'});
});

export default routes;