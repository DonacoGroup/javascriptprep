export const problems = {
  tripleAdd: (firstParam) => {
    // Contains the result of the operation
    let result = firstParam
    // return a function to be invoked with the secondValue
    return (secondParam) => {
      // Add up firstValue and secondValue
      result += secondParam
      // return a function to invoked with the thirdValue
      return (thirdValue) => {
        result += thirdValue
        return result
      }
    }
  }
}
