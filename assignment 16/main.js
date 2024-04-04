let guestList = ["Sajawal Khan", "Ahtisham Ahmed", "Arshman Ahmed"];
console.log("Great News! we found a bigger aftar table");
//Unshift command line use in array format in biggner name addition
guestList.unshift("Naseem Ahmed");
//Splice command line use in array format (name add & remove)
guestList.splice(Math.floor(guestList.length / 2), 0, "Nouman");
//Push command line use in array format (name add in last)
guestList.push("Fahad");
console.log(guestList);
//foreach command line use in array format
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You all are cordially invited to aftar`);
});
export {};
