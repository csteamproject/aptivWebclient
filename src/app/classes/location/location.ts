import {
    Ilocation
  } from '../../interfaces/ilocation';

  export class Location implements Ilocation {
    public id: number;
    public unit: number;
    public building: number;
    public city: string;
    public street: string;
    public region: string;
    public address_code: number;
    public country: number;

    public static Deseralize(obj: Object | string): Location {
      const u = new Location();
      if (obj instanceof Object) {
        return Object.assign(u, obj);
      } else {
        return Object.assign(u, JSON.parse( < string > obj));
      }
    }

    public static DeseralizeMany(objects: Object[]): Location[] {
      const locations: Location[] = [];
      objects.forEach(obj => {
        const location = Object.assign(new Location(), obj);
        locations.push(location);
      });
      console.log('Many locations test: ', locations);
      return locations;
    }
    public Serialize(): string {
      return JSON.stringify(this);
    }
  }
