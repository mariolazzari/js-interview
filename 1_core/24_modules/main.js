// Create a es6 module with function getName, getSurname and default export getFullname.
// Create the same with commonJS module
// What is the difference?

import { getName } from "./es6";
import getFullname from "./es6";

console.log(getName("Mario"));
console.log(getFullname("Mario", "Lazzari"));
