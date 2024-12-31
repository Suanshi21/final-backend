import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(username: string, password: string): Promise<import("./user.schema").User>;
    login(username: string, password: string): Promise<{
        token: string;
    }>;
}
