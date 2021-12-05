var message = "Hello I am programming hero."

function findVowels(str){
    var text = str.toLowerCase();
    var count =0;
    console.log(text);
    for(var i = 0; i<text.length; i++){
        if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o'|| text[i] == 'u'){
            console.log(text[i] )
            count++;
        }
    }
    return count;
}
var result = findVowels(message);
console.log(result);