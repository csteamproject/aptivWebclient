import {
  IItem
} from '../../interfaces/iitem';
import { Computer } from '../computer/computer';

export class Item implements IItem {
  public ID: number;
  public Name: string;
  public User_id: number;
  public Location_id: number;
  public Serial_number: string;
  public Brand: string;
  public Model: string;
  public Checked_out_id: number;
  public Created_at: Date;
  public Updated_at: Date;
  public Item_delete_date: Date;
  // old variables, likely not going to be used but kept for compatibility
  public Price: number = 0.00;
  public Quantity: number = 0;
  public Computer: Computer;

  public static Deseralize(obj: Object | string): Item {
    const u = new Item();
    if (obj instanceof Object) {
      return Object.assign(u, obj);
    } else {
      return Object.assign(u, JSON.parse( < string > obj));
    }
  }

  public static DeseralizeMany(objects: Object[]): Item[] {
    const items: Item[] = [];
    objects.forEach(obj => {
      const item = Object.assign(new Item(), obj);
      items.push(item);
    });
    return items;
  }

  public Serialize(): string {
    return JSON.stringify(this);
  }
}
