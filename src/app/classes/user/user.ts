import { IUser } from '../../interfaces/iuser';
import { UserToken } from '../user-token';

export class User implements IUser {
    public id: number;
    // public password_digest: string;
    public username: string;
    public password: string;
    // public created_at: Date;
    // public updated_at: Date;
    public token: UserToken;

    public static Deseralize(obj: Object | string): User {
        const u = new User();
        if (obj instanceof Object) {
            return Object.assign(u, obj);
        } else {
            return Object.assign(u, JSON.parse(<string>obj));
        }
    }

    public Serialize(): string {
        return JSON.stringify(this);
    }



}
