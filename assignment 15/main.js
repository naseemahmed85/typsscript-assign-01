var guestList = ["Sajawal Khan", "Waseem Ahmed Abbasi", "Ahtisham Ahmed Abbasi", "Arshman Ahmed Abbasi"];
var dontCome = guestList[2];
console.log(dontCome, "Main nahin aa sakta");
guestList.splice(2, 1, "Naseem Ahmed Abbasi");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to aftar with me?")); });
