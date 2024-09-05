var rand = Math.random();
// Generating the First Name
if (rand < 0.33) {
    var first = "Crazy";
}
else if(rand >0.33 && rand < 0.66){
    var first = "Amazing";
}
else {
    var first = "Fire";
}
var rand = Math.random();
// Generating the middle Name
if (rand < 0.33) {
    var middle = "Engine";
}
else if(rand >0.33 && rand < 0.66){
    var middle = "Food";
}
else {
    var middle = "Garnaments";
}
var rand = Math.random();
// Generating the third Name
if (rand < 0.33) {
    var third = "Bros";
}
else if(rand >0.33 && rand < 0.66){
    var third = "Limited";
}
else {
    var third = "Hub";
}
console.log(`The Random Name Generated for Your Bussiness is ${first} ${middle} ${third}`);