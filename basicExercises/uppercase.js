import {provinces} from '../data.js';

// Function to convert all provinces to uppercase
function ProvincesToUppercase(array) {
    return array.map(province => province.toUpperCase());
}

// Call the function
const uppercaseProvinces = ProvincesToUppercase(provinces);

console.log(uppercaseProvinces);