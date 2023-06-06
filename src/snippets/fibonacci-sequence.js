console.log("Fibonacci sequence!");
// input: 0, fib(0) output [0]
// input: 1, fib(1) output [0]
// input: 2, fib(2) output [0,1]
// input: 3, fib(n) output [0,1,1]
// input: 4, fib(n) output [0,1,1,2]

const fib = (n) => {
    let output = [0,1]
    if(n===0) return []
    if(n===1) return [0]
    for (i=2;i<=n-1;i++){
        output[i] = output[i-2] + output[i-1]
    }
    return output
}

const testFib = (input) => {
    //const input = console.readline()
    console.log(fib(Number(input)))
}
console.log("Testing Fibonacci sequence!");
testFib(0)
testFib(1)
testFib(2)
testFib(3)
testFib(4)
testFib(15)

console.log("Factorial of a number!");
