import { IUser } from '../../interfaces/iuser';

export class User implements IUser {
    public first: string;
    public last: string;
    public role: string;
    public success: Boolean;
    public token: string;

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
