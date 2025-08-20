import { User } from "../database/entities/User";
import { usersRepositories } from "../database/repositories/UsersRepositories";

export default class ListUsersService{
    async execute(): Promise<User[]>{
        const user = await usersRepositories.find();
        return user;
    }
}