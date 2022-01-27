import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
/*
location: {lat: 3.5458, lng: -66.3042}
name: "Raphaelle"
*/

const company = new Company();
/*
catchPhrase: "Optional homogeneous application"
companyName: "Davis, Schuppe and Reinger"
location: {lat: 83.4425, lng: -75.128}
*/

const customMap = new CustomMap("map");

customMap.addUserMarker(user);
customMap.companyMarker(company);
