
const vowels = ["a", "e", "i", "o", "u"];


function countVowels(str){
    const count = [];
    const chnagrToArr = str.split('');

    chnagrToArr.forEach((char) => {
        if(vowels.includes(char)){
            count.push(char);
        }
    });

    return `The Total of  Vowels that we have in ${str} == ${count.length}`;
} 

console.log(countVowels('javascript')); // string here 
