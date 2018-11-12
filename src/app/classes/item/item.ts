import {
  IItem
} from '../../interfaces/iitem';
import { Computer } from '../computer/computer';

export class Item implements IItem {
  public ID: number;
  public Name: string;
  public Price: number;
  public Quantity: number;
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
