// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর যোগফল নির্ণয় করবে।

// ইনপুটঃ [1,2,3,4,5,6,7,8,9,10]

// আউটপুটঃ ৫৫



//var numbers=[1,2,3,4,5,6,7,8,9,10]
// index start = 0
// numbers[3]=4
function arraySum(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        var element = nums[i]
        sum = sum + element
    }
    return sum;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = arraySum(numbers);
console.log(result)