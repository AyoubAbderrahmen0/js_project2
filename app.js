// Reverse a String: Write a function that reverses a given string.

function reversee(ch) {
    var cha ="";
    for(var i = ch.length -1; i>=0 ; i--) {
        cha += ch[i];
    }
    return cha;
}
var ch="hello"
console.log(reversee(ch))




// Count Characters: Create a function that counts the number of characters in a string.

function countChar(ch) {
    return ch.length;
}
// or
function countChar(ch) {
    for(var i=0 ;ch[i];i++) {
    }
    return i
}
var ch="hello"
console.log(countChar(ch))




// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function code(ch) {
    var cha =String.fromCharCode(ch[0].charCodeAt()-32)
    for (let i=1 ; i<ch.length ;i++) {
        if(ch[i]==" ")
            {cha+=" ";
            cha+=String.fromCharCode(ch[i+1].charCodeAt()-32); 
            ++i
            }
        else { 
            cha+=ch[i];
        }
    }
    return cha
}
    console.log(code("hello my name is ayoub"))





// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findNum(arr) {
    var maxi=arr[0]
    var mini=arr[0]
    for(let i of arr){
        if(i>maxi) {
            maxi = i
        }
        if(i<mini) {
            mini = i
        }
    }
    return [maxi , mini]
}
var arr = [20,-2,6,0,-20,7,150,-78,168]
console.log(`max : ${findNum(arr)[0]} \nmin : ${findNum(arr)[1]}`)




// Sum of Array: Create a function that calculates the sum of all elements in an array.

function summ(arr) {
    var sum=0;
    for(let i of arr) {
        sum+=i;
    }
    return sum;
}

var arr=[1,120,99,84,750,889,-5,-780,300]
console.log(summ(arr))





// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filtrage(arr, condition) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === condition) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

var arr = [1, 0, 6, 7, 10, 0, 22, 655, -1, -70, 0, 0, 8, 0];
console.log(filtrage(arr, 0));



// Factorial: Write a function to calculate the factorial of a given number.

function fac(n) {
    var fact = 1
    for(let i =1; i<=n ; i++) {
        fact*=i
    }
    return fact
}
var n =5
console.log(`${n}! = ${fac(n)}`)



// Prime Number Check: Create a function to check if a number is prime or not.

function prime(n) {
    for(let i =2; i < n/2 + 1 ; i++) {
        if(n % i==0) {
            return `${n} is not prime`
        }
    }
    return `${n} is prime`
}

console.log(prime(5))





// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fi = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fi[i] = fi[i - 1] + fi[i - 2];
    }
    
    return fi;
}

console.log(fibonacci(10));
