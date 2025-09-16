
// "day6"

// n!=n×(n−1)×(n−2)×...×1

function factorial(n){
    let sum = 1;
    if(typeof n == "number"){
                let i = 1;
        while(i<=n){
            sum = i*sum;
            i++;
        }
            console.log(sum);
    } else{
        console.log('this function accept just the numbers');
    }
}
factorial(19)