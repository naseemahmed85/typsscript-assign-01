let guestList: string[] = ["Sajawal Khan", "Ahtisham Ahmed", "Arshman Ahmed"];

//Print message

console.log("Unfortunately the new aftar table wont arrive so we can invite only 2 guest");

guestList.unshift("Naseem Ahmed", "Dilawar");

console.log("Updated list of guest:", guestList);

//Remove guest from list

while (guestList.length > 2) {
    let removedGuest: string | undefined = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry, ${removedGuest}, We cant invite you`);
    }    
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.

guestList.forEach(guest => {
    console.log(`Dear ${guest}, You both are invited for the aftar`);
});

//removed 2 name from the list

guestList.splice(0, guestList.length);

//print updated empty list

console.log("Updated list of guest:", guestList);
