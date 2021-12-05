var numbers = [3,4,5,-2,4,-3,1,0]
function numberType(nums){
    for(var i = 0; i<nums.length;i++){
        if(nums[i]<0){
            console.log(nums[i] + " is negative number");
        }
        else if(nums[i]>0){
            console.log(nums[i] + " is positive number");
        }
        else if(nums[i]===0){
            console.log(nums[i] + " is equal to zero");
        }
    }
    return;
}
numberType(numbers);
