import {provinces} from '../data.js';

// Filter out provinces containing "Cape"
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));

// Log the count of remaining provinces
console.log(`Remaining provinces count: ${filteredProvinces.length}`);