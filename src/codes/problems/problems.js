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
  }
}
