var numbers = [3,4,5,-2,4,-3,1,0]
function largestNumber(nums){
    var largest = nums[0]
    for(var i=0; i<nums.length;i++){
        var element = nums[i];
        if(element>largest){
            largest = element;
        }
    }
    return largest;
}
// var result = largestNumber(numbers);
// console.log(result);


var instructors = ['gias', 'sakib', 'sagor','emdadul']
function largestName(names){
    var largest = names[0]
    for(var i=0; i<names.length;i++){
        var element = names[i];
        if(element.length>largest.length){
            largest = element;
        }
    }
    return largest;
}
var result = largestName(instructors);
console.log(result);