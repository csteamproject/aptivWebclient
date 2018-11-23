import { Computer } from '../classes/computer/computer';

export interface IItem {
    Name: string;
    Price: number;
    Quantity: number;
    Computer: Computer;
    User_id: number;
    Location_id: number;
    Serial_number: string;
    Brand: string;
    Model: string;
    Checked_out_id: number;
    Created_at: Date;
    Updated_at: Date;
    Item_delete_date: Date;
}
