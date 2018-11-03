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

  public static DeseralizeMany(objects: Object[]): Item[] {
    const items: Item[] = [];
    objects.forEach(obj => {
      const item = Object.assign(new Item(), obj);
      items.push(item);
    });
    console.log('Many Items test: ', items);
    return items;
  }

  public Serialize(): string {
    return JSON.stringify(this);
  }
}
