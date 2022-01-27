import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}

/* 
https://github.com/faker-js/faker

If you wish to use this library instead, you can install it by running:

npm install @faker-js/faker

You'll then need to update your imports:

import faker from '@faker-js/faker';
*/
