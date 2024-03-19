// storing a person name in a variable
var personName = "Naseem Ahmed";
// // printing a person name in lowercase
// console.log("Lowercase:", personName.toLowerCase());
// // printing a person name in uppercase
// console.log("Uppercase:", personName.toUpperCase());
// // printing a person name in titlecase
// console.log("Titlecase:", personName.toTitleCase());
// function toUpperCase(UpperCase:string) {
//     return UpperCase.toUpperCase();
// }
// let inputString:string="naseem ahmed abbasi"
// let upperCaseString:string= toUpperCase(inputString)
// console.log("UpperCase:", upperCaseString);
// function toLowerCase(LowerCase:string) {
//     return LowerCase.toLowerCase();
// }
// let inputString1:string="naseem ahmed abbasi"
// let lowerCaseString:string= toLowerCase(inputString)
// console.log("LowerCase:", lowerCaseString);
// function toTitleCase(TitleCase:string) {
//     return TitleCase.toTitleCase();
// }
// let inputString2:string="naseem ahmed abbasi"
// let TitleCaseString:string= toTitleCase(inputString)
// console.log("TitleCase:", TitleCaseString);
// LowerCase, UpperCase & TitleCase
var personName1 = "Naseem Ahmed Abbasi";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
