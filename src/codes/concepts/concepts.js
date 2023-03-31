export const concepts = {
  // Map method returns a new array doesn't change the size of original array uses values of origin array to make new ones
  reverseArray: (originalArray) => originalArray.map(entry => entry.split('').reverse().join('')),
  // Set[Unique values] return an array of unique values
  removeDuplicates: (originalArray) => new Set((originalArray.map(entry => entry.toLowercase())).sort())
}
