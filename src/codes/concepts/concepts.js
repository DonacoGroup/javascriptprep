export const concepts = {
  // Map method returns a new array doesn't change the size of original array uses values of origin array to make new ones
  reverseArray: (originalArray) => originalArray.map(entry => entry.split('').reverse().join(''))
}
