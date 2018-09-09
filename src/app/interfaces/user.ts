export interface IUser {
    Email: string;
    Username: string;
    Password: string; // TODO: I believe we need to HASH this, might need to define what a password HASH is.
    FirstName: string;
    LastName: string;
    LastUpdateDT: Date;
    CreatedDT: Date;
}
