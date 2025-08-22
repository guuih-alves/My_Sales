import { Router } from "express";
import SessionControllers from "../controllers/SessionControllers";
import { sessionSchema } from "../schemas/SessionSchema";

const sessionRouter = Router();
const sessiosnController =  new SessionControllers();

sessionRouter.post('/', sessionSchema, sessiosnController.create);

export default sessionRouter;