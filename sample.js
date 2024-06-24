let nums = [1,2,44,6,3,4]
nums.splice(1,1,444)
// nums.slice()

console.log(nums)

// var isMonotonic = function(nums) {
//     let inc = true;
//     let dec = true;
//     for(let i=1; i<=nums.length; i++){
//         if(nums[i] > nums[i-1]){
//             dec = false;
//         }else if(nums[i] < nums[i-1]){
//             inc = false;
//         }
//     }
//     return inc||dec
// };
// let result = isMonotonic(nums)
// console.log(result)




