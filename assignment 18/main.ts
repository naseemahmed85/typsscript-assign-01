let placeVisit: string[] = ["london", "amarica", "paris", "new york", "sri lanka",];

// print in original order

console.log("Original order:", placeVisit);

// Print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical order:", placeVisit.slice().sort());

// array is still in its original order by printing it.

console.log("Original order:", placeVisit);

// Print array in reverse alphabetical order without changing the order of the original list.

console.log("reverse order:", placeVisit.slice().sort().reverse());

// array is still in its original order by printing it again.

console.log("Original order:", placeVisit);

// Reverse the order of your list. Print the array to show that its order has changed.

console.log("Reverse order changed");
placeVisit.reverse();
console.log(placeVisit);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Original order:", placeVisit.sort());
console.log(placeVisit);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("reverse alphabetical orderchanged:", placeVisit.sort().reverse());

console.log(placeVisit);

