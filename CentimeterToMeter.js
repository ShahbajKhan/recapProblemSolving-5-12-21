// 1 m =100 cm
//  1 cm = 1/100 m = 0.01m
//  2 cm = (0.01* 2)= 0.02 m
// 0.01 * input
function centimeterToMeter(inputLength){
    if(inputLength < 0){
        return "Length cannot be negative";
    }
    else{
        var meterLength = 0.01* inputLength;
        // console.log(meterLength)
        return meterLength;
    }
}
var result = centimeterToMeter(-17);
console.log("from result " + result)