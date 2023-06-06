console.log("Prime number!");
console.log("Prime number is a number greater than 1 that is not divisible by any smaller positive numbers");
// input: 0, prime(0) output 0*1 or 1*0 = 0 false (edge case prime>1 Therefore 0 cannot be prime)
// input: 1, prime(1) output 1*1 or 1*1 = 1 false (edge case prime>1 Therefore 1 cannot be prime)
// input: 2, prime(1) output 2*1 or 1*2 = 2 true (divisible by 1 and n=2 Therefore prime)
// input: 3, prime(2) output 3*1 or 1*3 = 3 true (divisible by 1 and n=3 Therefore prime)
// input: 4, prime(n) output 4*1 or 1*4 or 2*2 = 4 false (divisible by 1, 2 and n=4 Therefore cannot be prime)
// input: 5, prime(n) output 5*1 or 1*5 = 5 true (divisible by 1 and n=5)

const prime = (n) => {
    
    if(n<2) return false
    
    // Figure out if there are two smallers numbers between [2, n-1] whose that n is divisible by
    // If so then the number cannot be a prime
    for (let i=2;i<n;i++){
        if(n%i===0) {
            return false
        }
    }
    return true
}

const testPrime = (input) => {
    //const input = console.readline()
    console.log(prime(input))
}
console.log("Testing Prime number!");
testPrime(0)
testPrime(1)
testPrime(2)
testPrime(3)
testPrime(4)
testPrime(5)

