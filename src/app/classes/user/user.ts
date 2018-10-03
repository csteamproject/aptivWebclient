import { IUser } from '../../interfaces/user';
import { UserToken } from '../user-token';

export class User implements IUser {
    public id: number;
    public password_digest: string;
    public username: string;
    public created_at: Date;
    public updated_at: Date;
    public token: UserToken;

    public static Deseralize(obj: Object): User {
        const u = new User();
        return Object.assign(u, obj);
    }

    public Serialize(): string {
        return JSON.stringify(this);
    }



}
