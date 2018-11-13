

  export class Webuser {
    public First: string;
    public Last: string;
    public Username: string;

    public static Deseralize(obj: Object | string): Webuser {
      const u = new Webuser();
      if (obj instanceof Object) {
        return Object.assign(u, obj);
      } else {
        return Object.assign(u, JSON.parse( < string > obj));
      }
    }

    public static DeseralizeMany(objects: Object[]): Webuser[] {
      const users: Webuser[] = [];
      objects.forEach(obj => {
        const user = Object.assign(new Webuser(), obj);
        users.push(user);
      });
      return users;
    }
    public Serialize(): string {
      return JSON.stringify(this);
    }
  }
