

// Day 1 – Easy
// Problem: Two Sum


const nums = [2,7,11,15];
const target = 13;

// check  
function checking(nums){

    // 
    const storage = [];

    let i =0;
    while(i<nums.length){
        let j = i+1;
        while (j< nums.length) {
            if((nums[i] + nums[j]) === target){
                 storage.push(i, j);
                 return storage;
            }
            j++;
        }
        i++;
    };
    return storage;
}
console.log(checking(nums));