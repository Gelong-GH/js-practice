// List of choices
console.log("A. Pepsi Cola Php 30.00");
console.log("B. Coca Cola Php 35.00");
console.log("C. Apple (per kg) Php 100.00");
console.log("D. Orange (per kg) Php 120.00");
console.log("E. Hotdogs (per kg) Php 180.00");

// Ask for item choice
let itemChoice = prompt("Please enter your item choice (A, B, C, D, or E):");

// Ask for quantity
let quantity = parseInt(prompt(`Enter the quantity to be ordered on ${itemChoice}:`), 10);

// Calculate price
let price;
switch(itemChoice.toUpperCase()) {
    case 'A':
        price = 30.00;
        alert(`You ordered ${quantity} Pepsi Cola(s). Total price: Php ${price * quantity}`);
        break;
    case 'B':
        price = 35.00;
        alert(`You ordered ${quantity} Coca Cola(s). Total price: Php ${price * quantity}`);
        break;
    case 'C':
        price = 100.00;
        alert(`You ordered ${quantity} kg of Apple(s). Total price: Php ${price * quantity}`);
        break;
    case 'D':
        price = 120.00;
        alert(`You ordered ${quantity} kg of Orange(s). Total price: Php ${price * quantity}`);
        break;
    case 'E':
        price = 180.00;
        alert(`You ordered ${quantity} kg of Hotdog(s). Total price: Php ${price * quantity}`);
        break;
    default:
        alert("Invalid item choice.");
}