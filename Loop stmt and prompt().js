// Ask for the dog breed
let dogBreed = prompt("Please enter a  dog breed:");

// Ask for the print count
let printCount = parseInt(prompt(`How times you want to print the ${dogBreed}:`), 10);

// Print the dog breed multiple times
for (let i = 0; i < printCount; i++) {
    console.log(dogBreed);
}