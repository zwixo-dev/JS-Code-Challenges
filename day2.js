
// method one : 

// you can chnag ethe numbr here and run te code using nodemon for the first method 
const num = 919;

function check(randomNum){
    const split = randomNum.toString().split('');
    let i = split.length-1;
    const deff = [];
    while(i>=0){
        deff.push(split[i])
        i--;
    }
    // 
    if(deff.join('') === randomNum.toString()){
        console.log("=======================method1=======================");
        console.log("Palindrome");
        return true;
    } else{
        console.log("=======================method1=======================");
        console.log("not Palindrome");
        return false;
    }

}

check(num);



// method 2: 

// you can chnag ethe numbr here and run te code using nodemon for the second method 
// reverse method 
const number = 19;

function cheking(number){
    const changToString = number.toString();
    const spliting = changToString.split('').reverse().join('');
    if(changToString === spliting){
        console.log("=======================method2=======================");
        console.log("Palindrome");
    } else {
        console.log("=======================method2=======================");
        console.log("not Palindrome");
    }
}
cheking(number);