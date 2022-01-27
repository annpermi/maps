import faker from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

/* 
https://github.com/faker-js/faker

If you wish to use this library instead, you can install it by running:

npm install @faker-js/faker

You'll then need to update your imports:

import faker from '@faker-js/faker';
*/
