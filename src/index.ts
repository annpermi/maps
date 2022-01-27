// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();
// /*
// location: {lat: 3.5458, lng: -66.3042}
// name: "Raphaelle"
// */

// const company = new Company();
// /*
// catchPhrase: "Optional homogeneous application"
// companyName: "Davis, Schuppe and Reinger"
// location: {lat: 83.4425, lng: -75.128}
// */

// console.log({ user });
// console.log({ company });

//npm install @types/google.maps
//created instance of Map class

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
