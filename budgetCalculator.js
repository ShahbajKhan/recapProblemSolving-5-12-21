// ফাংশন লিখবে যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// এইবার ভালো করে খেয়াল করো। 
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।


// 2 ---> 100*2=200
// 2 ---> 200*2= 400
// 3 ---> 300*1= 300
// ------------------------
// Total page = 900


function paperRequirements(humayun, munir, jhankar){
    
    var humayunEachBook = 100;
    var munirEachBook = 200;
    var jhankarEachBook = 300;

    if(humayun < 0 || munir < 0 || jhankar < 0 || humayun % 1!== 0 || munir % 1!== 0|| jhankar % 1!== 0){
        return "copy number is not valid"
    }

    var humayunPageNumbers = 100* humayun;
    var munirPageNumbers = 200* munir;
    var jhankarPageNumbers = 300* jhankar;

    var totalPages = humayunPageNumbers + munirPageNumbers +jhankarPageNumbers;
    return totalPages;
}
var result = paperRequirements(2,0.2,1);
console.log(result);