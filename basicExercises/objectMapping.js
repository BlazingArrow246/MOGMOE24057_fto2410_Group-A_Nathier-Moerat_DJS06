import {provinces,names} from '../data.js';

// Use reduce to create the mapping object
const mapping = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index]; // Map the name to the province using the index
    return accumulator; // Return the updated accumulator
}, {}); // Start with an empty object

console.log(mapping);