/**
 * IUser is what the API returns when proper IUserCredentials are posted through the header to the /sessions controller.
 */
export interface IUser {
    first: string;
    last: string;
    role: string;
    success: Boolean;
    token: string;
}
