const orders = require('./'); // require the `index.js` file from the same directory.

var listItems = [
    {name: "Item 1", quantity: 1, price: 49.5},
    {name: "Item 5", quantity: 7, price: 2.0},
    {name: "Item 2", quantity: 2, price: 17.2},
]

console.log(orders.buildOrder(listItems));