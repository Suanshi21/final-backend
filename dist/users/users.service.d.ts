import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    signup(username: string, password: string): Promise<User>;
    login(username: string, password: string): Promise<{
        token: string;
    }>;
    findOne(username: string): Promise<User | null>;
}
