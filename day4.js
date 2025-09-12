//  👉function isAnagram checks if two strings are anagrams (same letters in a different order

function isAnagram(firstStr, secondStr){
    const fStr = firstStr.split('').sort().join('');   // fStr ==> fisrt string 
    const sStr = secondStr.split('').sort().join('');  // sStr ==> second string 

        // simple test 
        if(fStr !== sStr){
            console.log("try again");
        } else{
            console.log("the words have the same characters ;)");
        }

    console.log(fStr);
    console.log(sStr);
}
isAnagram("listen", "silent"); // testing just strings 
