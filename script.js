function problem1(){
    let form = document.querySelectorAll("#problem1");
    let result = document.querySelectorAll("#result1");
    let firstNumberInt = parseInt(form[0][0].value);
    let secondNumberInt = parseInt(form[0][1].value);
    
    // check if both fields if empty, 0, or negative
    // if all of the checks failed goto else
    if((firstNumberInt && secondNumberInt) && (firstNumberInt > 0 && secondNumberInt > 0)){
        for(let i = 0; i < secondNumberInt; i++){
            firstNumberInt += firstNumberInt;
        }
        result[0].innerHTML = "Result: " + firstNumberInt;
    }else{
        result[0].innerHTML = "Result: Both fields must be both not empty and positive";
    }
}

function problem2(){
    let form = document.querySelectorAll("#problem2");
    let result = document.querySelectorAll("#result2");

    let firstNumberInt = Math.abs(parseInt(form[0][0].value));
    let secondNumberInt = Math.abs(parseInt(form[0][1].value));

    if((firstNumberInt && secondNumberInt)){
        for(let i = 0; i < secondNumberInt; i++){
            firstNumberInt += firstNumberInt;
        }
        result[0].innerHTML = "Result: " + firstNumberInt;
    }else{
        result[0].innerHTML = "Result: Both fields must be both not empty";
    }
}

function problem3(){
    let form = document.querySelectorAll("#problem3");
    let firstNumber = parseInt(form[0][0].value);
    let secondNumber = parseInt(form[0][1].value);
    let result = document.getElementById("result3");
    let qoutient = 0;
    let flag = true;
    
    // True if values of firstNumber and secondNumber 
    // 1. are present
    // 2. greater than zero
    if((firstNumber && secondNumber) && (firstNumber > 0 && secondNumber > 0)){
        // keep subtracting the secondNumber
        // until the secondNumber is greater than the firstNumber
        // after this whatever is the value of the firstNumber will be the remainder
        while(flag){
            if(secondNumber > firstNumber){
                flag = false;
            }else{
                firstNumber -= secondNumber;
                qoutient++;
            }
        }
        result.innerHTML = "Result: Qoutient: " + qoutient + " Remainder: " + firstNumber;
        console.log("Qoutient: " + qoutient, "Remainder: " + firstNumber);
    }else{
        result.innerHTML = "Result: Valid values only.";
    }
}

// This solution is not mine.
// I already forgot where I exactly got this.
// I think this is where I got this
// https://stackoverflow.com/questions/46490253/printing-prime-numbers-between-a-range-from-slider-input
function generatePrimes(minValue, maxValue){
    let primes = [];    
    while ( minValue < maxValue ) {
        if ( minValue == 1 ){
          ++minValue;
          continue;
        }
        var flag = false;
        for(var i = 2; i <= minValue/2; ++i) {
           if(  minValue % i == 0 ) {
              flag = true;
                   break;
           }   
        }
        if (!flag){
            primes.push(minValue);
        }
        ++minValue;
   }
   return primes;
}

function problem4(){
    let form = document.querySelectorAll("#problem4");
    let firstNumber = parseInt(form[0][0].value);
    let secondNumber = parseInt(form[0][1].value);
    let result = document.getElementById("result4");
    let primeGenRes = generatePrimes(firstNumber, secondNumber); 
    result.innerHTML = "Primes: " + primeGenRes.join(", ") + " Sum of primes: " +  primeGenRes.reduce((a,b) => a+b, 0);
}
function fibonacci (n) {
    let fib = [1,1];
    for(let i = 1; i<n; i++){
        fib.push(fib[i-1] + fib[i]);
    }
    fib.pop();
    return fib;
};
  
function problem5(){
    let form = document.querySelectorAll("#problem5");
    let firstNumber = parseInt(form[0][0].value);
    let result = document.getElementById("result5");
    if(firstNumber && firstNumber > 0){
        result.innerHTML = "Result: " + fibonacci(firstNumber).join(", ");
    }else{
        result.innerHTML = "Result: Input must be a positive number and not empty.";
    }
}
// Not my solution
// I got this here
// https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38
function factorialize(num){
    if(num<=0){return 1;}
    return num*(factorialize(num-1));
}
function problem6(){
    let form = document.querySelectorAll("#problem6");
    let firstNumber = parseInt(form[0][0].value);
    let result = document.getElementById("result6");
    result.innerHTML = "Result: " + factorialize(firstNumber); 
}
// Not my solution
function isPerfect(n){
    let sum = 1;
    let i = 2;
    while(i * i <= n){
        if(n%i == 0){
            sum = sum + i +n/i
        }
        i += 1;
    }
    if(sum == n && n!=1){
        return true;
    }else{
        return false;
    }
}
function problem7(){
    let form = document.querySelectorAll("#problem7");
    let firstNumber = parseInt(form[0][0].value);
    let result = document.getElementById("result7");
    result.innerHTML = isPerfect(firstNumber) ? firstNumber + " is a perfect number." : firstNumber + " is not a perfect number."; 
}
function problem8(){
    let form = document.querySelectorAll("#problem8");
    let firstNumber = parseInt(form[0][0].value);
    let result = document.getElementById("result8");
    let arr = [];
    for(let i = 1; i <= firstNumber; i++){
        arr.push(i);
    }
    result.innerHTML = "Result: " + arr.join(" + ") + " = " + arr.reduce((a,b) => a+b, 0); 
}
// I really don't understand this problem
// but I think this qoura thread got it right
// https://www.quora.com/If-1-11-2-22-3-33-4-44-5-55-6-66-7-77-then-11
function problem9(){
    let form = document.querySelectorAll("#problem9");
    let firstNumber = parseInt(form[0][0].value);
    let result = document.getElementById("result9");
    let arr = [];
    for(let i = 1; i <= firstNumber; i++){
        arr.push(i);
    }
    result.innerHTML = "Result: " + arr.join(" + ") + " = " + (firstNumber + (firstNumber * 10));
}

// (1^1+2^2+3^3+4^4 = 288)
function problem10(){
    let form = document.querySelectorAll("#problem10");
    let firstNumber = parseInt(form[0][0].value);
    let result = document.getElementById("result10");
    let total = 0;
    for(let i = 1; i <= firstNumber; i++){
        total += Math.pow(i, i); 
    }
    result.innerHTML = "Result: " + total; 
}
function problem11(){
    let form = document.querySelectorAll("#problem11");
    let firstNumber = form[0][0].value;
    let result = document.getElementById("result11");
    let arr = firstNumber.split("");
    result.innerHTML = "Result: " + arr.reverse().join("");
}

// if you got more elegant solution to this
// then notify me.
function problem12(){
    let form = document.querySelectorAll("#problem12");
    let firstNumber = form[0][0].value;
    let result = document.getElementById("result12");
    let arr = firstNumber.split("");
    let res = [];
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "0":
                res.push("zero");
                break;
            case "1":
                res.push("one");
                break;
            case "2":
                res.push("two");
                break;
            case "3":
                res.push("three");
                break;
            case "4":
                res.push("four");
                break;
            case "5":
                res.push("five");
                break;
            case "6":
                res.push("six");
                break;
            case "7":
                res.push("seven");
                break;
            case "8":
                res.push("eigth");
                break;
            case "9":
                res.push("nine");
                break;
            default:
                console.log("DO NOTHING")
        }
    }
    result.innerHTML = "Result: " + res.join(" ");
}
function problem13(){
    let form = document.querySelectorAll("#problem13");
    let firstNumber = form[0][0].value;
    let result = document.getElementById("result13");
    let arr = firstNumber.split("");
    arr = arr.reverse();
    let res = [];
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case "0":
                res.push("zero");
                break;
            case "1":
                res.push("one");
                break;
            case "2":
                res.push("two");
                break;
            case "3":
                res.push("three");
                break;
            case "4":
                res.push("four");
                break;
            case "5":
                res.push("five");
                break;
            case "6":
                res.push("six");
                break;
            case "7":
                res.push("seven");
                break;
            case "8":
                res.push("eigth");
                break;
            case "9":
                res.push("nine");
                break;
            default:
                console.log("DO NOTHING")
        }
    }
    result.innerHTML = "Result: " + res.join(" ");
}
function problem14(){
    let form = document.querySelectorAll("#problem14");
    let firstNumber = form[0][0].value;
    let result = document.getElementById("result14");
    let arr = firstNumber.split("");
    result.innerHTML = "Result: " + arr.map(x => parseInt(x)).reduce((a,b) => a+b, 0);
}
function problem15(){
    let form = document.querySelectorAll("#problem15");
    let firstNumber = form[0][0].value;
    let result = document.getElementById("result15");
    let arr = firstNumber.split("");
    result.innerHTML = firstNumber == arr.map(x => parseInt(x)).reverse().join("") ? "Result: " + firstNumber + " is a palindrome." : "Result: " + firstNumber + " is not a palindrome.";
}
function problem16(){
    let form = document.querySelectorAll("#problem16");
    let sentence = form[0][0].value;
    let result = document.getElementById("result16");
    let wordArr = sentence.split(" ").join("<br>");
    result.innerHTML = "Result:<br>" + wordArr;
}
function problem17(){
    let form = document.querySelectorAll("#problem17");
    let sentence = form[0][0].value;
    let result = document.getElementById("result17");
    let wordArr = sentence.split("").join("<br>");
    result.innerHTML = "Result:<br>" + wordArr;
}
function problem18(){
    let form = document.querySelectorAll("#problem18");
    let word = form[0][0].value;
    let result = document.getElementById("result18");
    let matchY = RegExp('y$');
    let matchS = RegExp('s$');
    let matchCH = RegExp('ch$');
    let matchSH = RegExp('sh$');
    if(matchY.test(word)){
        result.innerHTML = "Result: " + (word.slice(0, -1) + "ies");
    }else if(matchS.test(word) || matchCH.test(word) || matchSH.test(word)){
        result.innerHTML = "Result: " + (word + "es");
    }else{
        result.innerHTML = "Result: " + (word + "s");
    }
}

// Obiously not my solution
// here is where I got it
// https://medium.com/@TimSeverien/substitution-cipher-in-javascript-d530eb2d923d
var Cipher = {}; // initiate namespace
Cipher.toQWERTY = function(text, decode) {
    // ABCDEF to QWERTY map
    var map = {
        a: '!', b: '"', c: '#',
        d: '$', e: '%', f: '&',
        g: "'", h: '(', i: ')',
        j: ',', k: '.', l: '-',
        m: '}', n: '|', o: '[',
        p: '\\', q: ']', r: '^',
        s: '_', t: ':', u: ';',
        v: '<', w: '=', x: '>',
        y: '?', z: '@'
    };

    // Flip the map
    if(decode) {
        map = (function() {
            var tmp = {};
            var k;

            // Populate the tmp variable
            for(k in map) {
                if(!map.hasOwnProperty(k)) continue;
                tmp[map[k]] = k;
            }

            return tmp;
        })();
    }

    return text.split('').filter(function(v) {
        // Filter out characters that are not in our list
        return map.hasOwnProperty(v.toLowerCase());
    }).map(function(v) {
        // Replace old character by new one
        // And make it uppercase to make it look fancier
        return map[v.toLowerCase()]
    }).join('');
};
function problem19(){
    let form = document.querySelectorAll("#problem19");
    let word = form[0][0].value;
    let result = document.getElementById("result19");
    result.innerHTML = "Encrypted text: " + Cipher.toQWERTY(word);
}
function decrypt(){
    let form = document.querySelectorAll("#problem19");
    let word = form[0][0].value;
    let result = document.getElementById("result19");
    let encrypted = Cipher.toQWERTY(word);
    result.innerHTML = "Decrypted text: " + Cipher.toQWERTY(word, true);
}