console.log("Factorial of a number!");
console.log("Factorial of a number(n) is the product of all positive integers less than the number(n)");
// input: 0, fact(0) output 1
// input: 2, fact(1) output 2*1 = 2
// input: 3, fact(2) output 3*2*1 = 6
// input: 4, fact(n) output 4*3*2*1 = 24
// input: 5, fact(n) output 5*4*3*2*1 = 120

const fact = (n) => {
    let output = 1
    if(n===0) return output
    
    for (let i=n;i>=1;i--){
        output*= i
    }
    return output
}

const testFact = (input) => {
    //const input = console.readline()
    console.log(fact(Number(input)))
}
console.log("Testing Factorial of a number!");
testFact(0)
testFact(1)
testFact(2)
testFact(3)
testFact(4)
testFact(5)
