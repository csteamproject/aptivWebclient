import {
    Ilocation
  } from '../../interfaces/ilocation';

  export class Location implements Ilocation {
    public id: string;
    public unit: string;
    public building: string;
    public city: string;
    public street: string;
    public region: string;
    public address_code: string;
    public country: string;

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
      return locations;
    }
    public Serialize(): string {
      return JSON.stringify(this);
    }
  }
