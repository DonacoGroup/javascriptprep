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
  findProject: (originalArray, search) => originalArray.find(entry => entry.name.toLowerCase() === search.toLowerCase()),
  // Calculate average projects profit so far
  averageProjectsProfit: (originalArray) => originalArray.reduce((avg, curr, _, { length }) => (avg + curr.profit / length), 0),
  // Calculate and return sum and average of profits
  calculateSumAverageOfProfits: (originalArray) => originalArray.reduce((result, entry, _, { length }) => {
    result.profits += entry.profit
    result.average = result.average + entry.profit / length
    return result
  }, { profits: 0, average: 0 }),
  // Swap values to demonstrate array destructuring concept
  swapValues: (param1, param2) => {
    [param2, param1] = [param1, param2]
    return [param2, param1]
  },
  // Get project lead to demonstrate object destructuring
  getProjectLead: (originalArray, name) => {
    const { team: { lead } } = originalArray.find(entry => entry.name.toLowerCase() === name.toLowerCase())
    return lead
  },
  // List chunked projects to demonstrate Array.from concept
  listChunkedProjects: (originalArray, chunkSize) => {
    const projectsLength = originalArray.length
    const chunksCount = Math.ceil(projectsLength / chunkSize)

    return Array.from({ length: chunksCount }, (_, index) => {
      const start = index * chunkSize
      return originalArray.slice(start, start + chunkSize)
    })
  },
  // Create promise
  createPromise: () => new Promise((resolve, reject) => {
    const luck = 1
    // Uncomment lines to test
    const random = Math.floor(Math.random() * 3)

    if (random === luck) {
      resolve({ text: 'Hello World!' })
    } else {
      reject(new Error('Something went wrong!'))
    }
  })
}
