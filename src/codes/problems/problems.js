import { Stack } from './problems.utils'
export const problems = {
  // Solve Triple Add Function Probleme using a currying function
  tripleAdd: (firstParam) => {
    // return a function to be invoked with the secondValue
    return (secondParam) => {
      // return a function to invoked with the thirdValue
      return (thirdValue) => {
        // Add up and return firstValue, secondValue and thirdValue
        return firstParam + secondParam + thirdValue
      }
    }
  },
  // Solve the the function that tracks its own calls using a closure
  trackCalls: () => {
    // Declare and initialize the counter
    let counter = 0
    // Closure function that keeps track of the count and return function output and count
    return () => {
      counter++
      return { output: '', counter }
    }
  },
  // Solve Palindrome Problem using default javascript Array features
  solvePalindromeWithArray: (phrase) => [...phrase].reverse().join('').replace(/[\s,;.!?/:']/g, '').toLocaleLowerCase() === phrase.replace(/[\s,;.!?/:']/g, '').toLocaleLowerCase(),
  // Solve Palindrome Problem using a Stack
  solvePalindromeWithStack: (phrase) => {
    // Clean up punctuation and whitespaces, set characters to lowercase
    const cleanedPhrase = phrase.replace(/[\s,.?;:!']/g, '').toLocaleLowerCase()
    // Create the stack
    const stack = new Stack()
    // Add phrase characters into a stack
    for (let i = 0; i < cleanedPhrase.length; i++) {
      stack.push(cleanedPhrase[i])
    }
    // Create reverse phrase
    let reversePhrase = ''
    const stackSize = stack.size()
    for (let i = 0; i < stackSize; i++) {
      reversePhrase += stack.pop()
    }
    // Return the comparison of phrase to reverse phrase
    return cleanedPhrase === reversePhrase
  }
}
