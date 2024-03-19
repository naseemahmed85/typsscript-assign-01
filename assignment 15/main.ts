let guestList = ["Sajawal Khan", "Waseem Ahmed Abbasi", "Ahtisham Ahmed Abbasi", "Arshman Ahmed Abbasi"]

let dontCome = guestList[2]

console.log(dontCome, "Main nahin aa sakta")

guestList.splice(2, 1, "Naseem Ahmed Abbasi")

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to aftar with me?`))
