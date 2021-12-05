function oddEven(num){
    
    if(num%2===0){
        console.log(num +" is even");
    }else{
        console.log(num+" is odd");
    }
}
oddEven(2);
function oddEvenRange(num1, num2){
    for(var i =num1; i<=num2; i++){
        if(i % 2 === 0){
            console.log(i+" is even")
        }
    }
    return;
}
oddEvenRange(2,9);


