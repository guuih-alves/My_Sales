import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { createUserSchema } from "../schemas/UserSchema";

const usersRouter = Router();
const usersControllers = new UsersController();

usersRouter.get('/', usersControllers.index);
usersRouter.post('/', createUserSchema, usersControllers.create);

export default usersRouter;