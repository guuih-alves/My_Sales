
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUsersService from "../services/ListUsersService";


export default class UsersController {
     async index(request: Request, response: Response): Promise<Response>
     { const listUsers = new ListUsersService(); 
        const user = await listUsers.execute(); 
        return response.json(user); }



    async create(request: Request, response: Response): Promise<Response>{
        const { name, email, password} = request.body;
        const createUser = new CreateUserService
        const user = await createUser.execute({
            name,
            email,
            password
        });
        return response.json(user);
    }

}