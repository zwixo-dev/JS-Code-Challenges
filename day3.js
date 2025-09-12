// 👉 Write a function reverseString(str) that takes a string and returns it reversed.

const text = 'hello';


function reverseString(stringText){
   return `from ${stringText} --To--> ${stringText.split('').reverse().join('')}`;
}
console.log(reverseString(text)); // output  --> hello to olleh