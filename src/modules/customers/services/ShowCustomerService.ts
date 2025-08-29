import AppError from "@shared/errors/AppError";
import { customerRepository } from "../database/repositories/CustomerRepositories";
import { Customer } from "../database/entities/Customers";

interface IShowCustomer{
    id: number;
}

class ShowCustomerService{
    public async execute({id}: IShowCustomer): Promise<Customer>{
        const customer = await customerRepository.findById(id);

        if(!customer){
            throw new AppError('Customer not found', 404);
        }

        return customer;
    }
}

export default ShowCustomerService;