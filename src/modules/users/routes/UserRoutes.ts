import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { createUserSchema } from "../schemas/UserSchema";
import AuthMiddleware from "@shared/middlewares/authMiddleware";

const usersRouter = Router();
const usersControllers = new UsersController();

usersRouter.get('/', AuthMiddleware.execute, usersControllers.index);
usersRouter.post('/', createUserSchema, usersControllers.create);

export default usersRouter;