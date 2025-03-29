import {names} from '../data.js';

// Create a boolean array
const containsS = names.map(name => {
    // Split the name into an array of characters and use `some` to check for 's'
    return name.toLowerCase().split('').some(char => char === 's');
});

console.log(containsS);