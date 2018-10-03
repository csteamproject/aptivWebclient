import { UserToken } from '../classes/user-token';

export interface IUser {
    id: number;
    password_digest: string;
    username: string;
    created_at: Date;
    updated_at: Date;
    token: UserToken;
}
