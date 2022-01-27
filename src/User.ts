import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

//instance of User class satisfied all the properties required by the Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

/* 
https://github.com/faker-js/faker

If you wish to use this library instead, you can install it by running:

npm install @faker-js/faker

You'll then need to update your imports:

import faker from '@faker-js/faker';
*/
