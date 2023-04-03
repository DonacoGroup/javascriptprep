export const concepts = {
  // Map method returns a new array doesn't change the size of original array uses values of origin array to make new ones
  reverseArray: (originalArray) => originalArray.map(entry => entry.split('').reverse().join('')),
  // Set[Unique values] return an object of unique values
  removeDuplicates: (originalArray) => new Set((originalArray.map(entry => entry.toLowerCase())).sort()),
  // Set[Unique values] return an object of unique values
  listProjectCategories: (originalArray) => ['all', ...new Set((originalArray.map(entry => entry.toLowerCase())).sort())],
  // Dynamic object creation by adding new key-value to the object
  createDynamicObject: (newKey, newValue) => {
    return {
      [newKey]: newValue
    }
  },
  addKeyValue: (originalObject, newKey, newValue) => {
    originalObject[newKey] = newValue
    return originalObject
  },
  // Filter returns a new array based on a specific condition or set of conditions
  filterProjects: (originalArray, filter) => originalArray.filter(entry => entry.category.toLowerCase() === filter.toLowerCase()),
  // Find returns the first single instance of (object or whatever) based on a specific condition or set of conditions, returns undefined if no match
  findProject: (originalArray, search) => originalArray.find(entry => entry.name.toLowerCase() === search.toLowerCase())
}
