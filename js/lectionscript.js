"use strict";

if (4 === 4) {
    console.log("Ok!");
} else {
    console.log("Error!");
}

// const num = 50;

// if (num < 49) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Too many!");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Error!");


const num = 50;

//switch - строгое равенство ===
switch (num) {
    case 49: 
        console.log("Incorrect!");
        break;
    case 100:
        console.log("Incorrect!");
        break;
    case "50": // этот код не выполнится так как "50" - это строка
        console.log("Exactly!");
        break;
    default:
        console.log("Not this time");
}
