import AppError from "@shared/errors/AppError";
import { userTokensRepositories } from "../database/repositories/UserTokensRepositories";
import { usersRepositories } from "../database/repositories/UsersRepositories";
import { isAfter, addHours } from "date-fns";
import { hash } from "bcrypt";

interface IResetPassword{
    token: string,
    password: string;
}

export default class ResetPasswordService {
    async execute({ token, password}: IResetPassword): Promise<void>{
        const userToken = await userTokensRepositories.findByToken(token);

        if(!userToken){
            throw new AppError('User not exists', 404)
        }

        const user = await usersRepositories.findById(userToken.id)

        if(!user){
            throw new AppError('User not exists',404)
        }

        const tokenCreatedAt = userToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 2) //Verifica se token esta no periodo de 2h

        if(isAfter(Date.now(), compareDate)){
            throw new AppError('Token expired', 401); //Verifica se a data atual esta depois do compareDate
        }

        user.password = await hash(password, 10);
        await usersRepositories.save(user);
    }

}