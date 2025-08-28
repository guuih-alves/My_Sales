import AppError from "@shared/errors/AppError";
import { usersRepositories } from "../database/repositories/UsersRepositories"
import { userTokensRepositories } from "../database/repositories/UserTokensRepositories";
import { sendEmail } from "@config/email";

interface IForgotPassword{
    email: string;
}


export default class SendForgotPasswordEmailService {
    async execute ({ email}: IForgotPassword): Promise<void> {
        const user =  await usersRepositories.findByEmail(email);

        if(!user){
            throw new AppError('User not found', 404)
        }

        const token =  await userTokensRepositories.generate(user.id);
        sendEmail({
            to: email,
            subject: 'My sales Recovery password',
            body: `
            <div> style='font-family: Arial, sans-serif; padding:20px; color: #333;
            <h1 style="color: #041d40;">Password Reset Verification Code</h1>
            <h3 style="color: #041d40;Dear ${user.name},</h3>
            <p>${token?.token} </p>
            </div>`,
        })
    }
}