// Tamrin 1

// 1. NaN

// 2. 122 (string)

// 3.  5

// 4. (6) = >  at first counter update by 1 and 2 * 3 = 6

// 5.
console.log(undefined == null); // true  = > value are same

console.log(undefined === null); // false = > value are same but TYPE NOT first type is undefiend, and null TYPE is Object

console.log(null == "\n0\n"); // false = > because null is not 0(string) is a value

console.log(null === +"\n0\n"); // false = > because null is not 0(number) is a value

//----------------------------------------------------------------------------

// Tamrin 2
const numberOne = Number(prompt("Enter Number A"));
const numberTwo = Number(prompt("Enter Number B"));
const numberThree = Number(prompt("Enter Number C"));

if (
  numberOne + numberTwo > numberThree &&
  numberTwo + numberThree > numberOne &&
  numberThree + numberOne > numberTwo
) {
  console.log("(Yes) You can Draw a Triangle 😃");
} else {
  console.log("(No) You can not Draw 😥");
}

//-----------------------------------------------------------------------
// Tamrin 3
let count = 0;
let recived = Number(prompt("Enter a Number!"));
if (recived >= 1) ++count;

while (recived / 10 >= 1) {
  recived /= 10;
  ++count;
}
console.log(count);
document.querySelector(".number").textContent = count;

//------------------------------------------------------------------------------
// Tamrin 4

let number1 = 90;
let number2 = 30;
for (let i = 1; i < number2; number2--) {
  r = number1 % number2;
  if (r == 0) {
    console.log(number2);
  }
  for (let i = 1; i < number1; number1--) {
    let x = number2 % number1;
    if (x == 0) {
      console.log(number1);
    }
  }
}
