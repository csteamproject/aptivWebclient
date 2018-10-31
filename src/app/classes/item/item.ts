import {
  IItem
} from '../../interfaces/iitem';

export class Item implements IItem {
  public name: string;
  public price: number;
  public quantity: number;

  public static Deseralize(obj: Object | string): Item {
    const u = new Item();
    if (obj instanceof Object) {
      return Object.assign(u, obj);
    } else {
      return Object.assign(u, JSON.parse( < string > obj));
    }
  }

  public Serialize(): string {
    return JSON.stringify(this);
  }
}
