import AppError from "@shared/errors/AppError";
import { usersRepositories } from "../database/repositories/UsersRepositories";
import { compare } from "bcrypt";
import { Secret, sign } from "jsonwebtoken";
import { User } from "../database/entities/User";

interface ISessionUser{
    email: string;
    password: string;
}

interface ISessioResponse{
    user: User;
    token: string;
}

export default class SessionUserService {
    async execute({ email, password}: ISessionUser): Promise<ISessioResponse>{
        const user = await usersRepositories.findByEmail(email);

        if(!user){
            throw new AppError('Incorrect email/password combination', 401)
        }

        const passwordConfirmated =  await compare(password, user.password);

        if(!passwordConfirmated){
            throw new AppError('Incorrect email/password combination',401)
        }

        const token = sign({}, process.env.APP_SECRET as Secret, {subject: String(user.id), expiresIn: '1d'});

        return{
            user, token,
        };
    }
}