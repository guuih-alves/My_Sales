import { Customer } from "../database/entities/Customers";
import { customerRepository } from "../database/repositories/CustomerRepositories";

class ListCustomerService {
    public async execute(): Promise<Customer[]> {
        const customer = customerRepository.find();

        return customer;
    }
}

export default ListCustomerService