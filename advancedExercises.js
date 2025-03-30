
import {products} from '../data.js';


console.log({
    // Log Products
    productNames: products.map(product => product.product),

    // Filter by Name Length
    filteredByNameLength: products.filter(product => product.product.length <= 5),

    // Price Manipulation: Total Price
    totalPrice: products
        .filter(product => product.price !== null) // Filter out products without prices
        .map(product => Number(product.price)) // Convert price to number
        .reduce((total, price) => total + price, 0), // Calculate total price

    // Concatenate Product Names
    concatenatedNames: products.reduce((acc, product) => acc + product.product, ""),

    // Find Extremes in Prices
    priceExtremes: (() => {
        const prices = products
            .filter(product => product.price !== null)
            .map(product => Number(product.price));
        const highest = Math.max(...prices);
        const lowest = Math.min(...prices);
        return `Highest: ${highest}. Lowest: ${lowest}`;
    })(),

    // Object Transformation
    transformedObject: products.reduce((acc, product) => {
        acc[product.product] = { name: product.product, cost: product.price };
        return acc;
    }, {})
});
