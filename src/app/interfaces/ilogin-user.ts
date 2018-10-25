import { IUserCredentials } from './iuser-credentials';
import { IUser } from './iuser';
/**
 * ILoginUser is an extension of IUser and IUserCredentials, and only exists on the Angular side.
 */
export interface ILoginUser extends IUser, IUserCredentials {
    username: string;
    password: string;
    first: string;
    last: string;
    role: number;
}
