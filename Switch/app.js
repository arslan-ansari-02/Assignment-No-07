// List of switch case programming exercises
// 1. Write a ts program to print day of week name using switch case.
// var num = prompt("Please enter your day number: ");
// switch (num) {
//     case '1': {
//         console.log("monday is first day of weak");
//         break;
//     }
//     case '2': {
//         console.log("tuesday is second day of weak");
//         break;
//     }
//     case '3': {
//         console.log("wednasday  is third day of weak");
//         break;
//     }
//     case '4': {
//         console.log("thrusday is fourth day of weak");
//         break;
//     }
//     case '5': {
//         console.log("friday is fifth day of weak");
//         break;
//     }
//     case '6': {
//         console.log("stuerday is sixth day of weak");
//         break;
//     }
//     case '7': {
//         console.log("sunday is seventh day fo weak");
//         break;
//     }
//     default: {
//         console.log("only 1 to 7 days in a weak your enter number=", num);
//     }
// }
// 2. Write a ts program print total number of days in a month using switch case.
// var month = prompt("Please enter month number (1-12): ");
// switch (month) {
//     case '1': {
//         console.log("31 days");
//         break;
//     }
//     case '2': {
//         console.log("28/29 days");
//         break;
//     }
//     case '3': {
//         console.log("31 days");
//         break;
//     }
//     case '4': {
//         console.log("30 days");
//         break;
//     }
//     case '5': {
//         console.log("31 days");
//         break;
//     }
//     case '6': {
//         console.log("30 days");
//         break;
//     }
//     case '7': {
//         console.log("31 days");
//         break;
//     }
//     case '8': {
//         console.log("31 days");
//         break;
//     }
//     case '9': {
//         console.log("30 days");
//         break;
//     }
//     case '10': {
//         console.log("31 days");
//         break;
//     }
//     case '11': {
//         console.log("30 days");
//         break;
//     }
//     case '12': {
//         console.log("31 days");
//         break;
//     }
//     default: {
//         console.log("Invalid input! Please enter month number between 1-12");
//     }
// }
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// var alphabet = prompt("Please enter any alphabet: ");
// switch (alphabet) {
//     case 'a': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'e': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'i': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'o': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'u': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'A': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'E': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'I': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'O': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     case 'U': {
//         console.log("This alphabet is Vowel");
//         break;
//     }
//     default: {
//         console.log("This alphabet is Consonant");
//         break;
//     }
// }
// 4. Write a ts program to find maximum between two numbers using switch case.
// var num1 = 10;
// var num2 = 20;
// switch (true) {
//     case (num1 > num2): {
//         console.log("num1 is maximum",num1);
//         break;
//     }
//     case (num2 > num1): {
//         console.log("num2 is maximum",num2);
//         break;
//     }
// }
// 5. Write a ts program to check whether a number is even or odd using switch case.

// var num = prompt("Please enter any number to check even or odd: ");
// var num1 = 10;
// var num2 = 19;
// switch (true) {
//     case (num % 2 == 0): {
//         console.log("Eumber is Even");
//         break;
//     }
//     default: {
//         console.log("Number is Odd");
//         break;
//     }
// }

// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.

// var num = prompt("Please enter any number: ");

// switch (true) {
//     case (num > 0): {
//         console.log("number is positive.", num);
//         break;
//     }
// }
// switch (true) {
//     case (num < 0): {
//         console.log("number is negtive.", num);
//         break;
//     }
//     case (num <= 0): {
//         console.log("number is zero.", num);
//         break;
//     }
// }

// 7. Write a ts program to find roots of a quadratic equation using switch case.

let root1, root2;

let a = prompt("Please enter the first number: ");
let b = prompt("Please enter the second number: ");
let c = prompt("Please enter the third number: ");

let discriminant = b * b - 4 * a * c;

switch (discriminant > 0) {
    case (discriminant > 0): {
        root1 = (-b + sqr(discriminant) / (2 * a));
        root2 = (-b + sqr(discriminant) / (2 * a));
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    default:
        break;
}