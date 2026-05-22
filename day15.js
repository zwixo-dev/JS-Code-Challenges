
// ==================== From codeWars ======================= 

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
    const str  = s.split("");
    const myNewString = [];

    str.forEach((e, i) => {
        if(e!=="!"){
            myNewString[i] = e;
        console.log(e);
        }
    });
    console.log(myNewString.join(""));
}

console.log(removeExclamationMarks("$e!!!!!eo!u!!!!rur!"));


// second solution

function remove_ExclamationMarks(s) {
    return  s.replace("!", "");
}

console.log(remove_ExclamationMarks("faaaaaaah!"));