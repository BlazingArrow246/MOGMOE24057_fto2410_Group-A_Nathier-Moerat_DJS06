import { provinces, names} from '../data.js';

// Log each name
names.forEach(name => console.log(name));

// Log each province
provinces.forEach(province => console.log(province));

// Log each name with its matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});