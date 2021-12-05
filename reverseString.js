var message = "Hello I am programming hero.";

function reverseString(text) {
    var reversed = ""
    for (var i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i]
    }
    // for(var i=0; i<text.length;i++){
    //     reversed = text[i]+reversed
    // }
    return reversed;
}
var result = reverseString(message);
console.log(result);