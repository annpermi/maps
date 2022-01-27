import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

/*
location: {lat: 3.5458, lng: -66.3042}
name: "Raphaelle"
*/

/*
catchPhrase: "Optional homogeneous application"
companyName: "Davis, Schuppe and Reinger"
location: {lat: 83.4425, lng: -75.128}
*/
