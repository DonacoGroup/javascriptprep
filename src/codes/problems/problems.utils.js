// Create a stack
export class Stack {
  constructor () {
    // Index of insertion
    this.index = 0
    // The items
    this.collection = []
  }

  // Get collection
  items = () => {
    return this.collection
  }

  // Get size
  size = () => {
    return this.index
  }

  // Push item to the stack
  push = (item) => {
    // add item on top the items collection
    this.collection[this.index] = item
    // update index
    this.index++
  }

  // Take a peek at the top item in the stack
  peek = () => {
    // return the item at the top of the items collection
    return this.collection[this.index - 1]
  }

  // Pop item from the stack
  pop = () => {
    // If there is no item in the stack
    if (this.index === 0) {
      return undefined
    }
    // update index
    this.index--
    // retreive item at the top of the stack
    const top = this.collection[this.index]
    // delete item at the top of the stack
    delete this.collection[this.index]
    // return item at the top of the stack
    return top
  }
}
// Create a custom Set
export class CustomSet {
  constructor () {
    this.collection = []
  }

  // Get the set's items
  items = () => this.collection
  // Get the set's size
  size = () => this.collection.length
  // Check if the set contains item
  has = (item) => this.collection.includes(item)
  // Add item to the set
  add = (item) => {
    if (this.has(item)) {
      return false
    }
    this.collection.push(item)
    return true
  }

  // Remove item from the set
  remove = (item) => {
    if (this.has(item)) {
      const position = this.collection.indexOf(item)
      this.collection.splice(position, 1)
      return true
    }
    return false
  }

  // Return the union of the set and another set
  union = (secondSet) => {
    // Create unionSet
    const unionSet = new CustomSet()
    // Push each element of this set into the union set
    this.items().forEach((item) => unionSet.add(item))
    // Push each element of the second set into the union set
    secondSet.items().forEach((item) => unionSet.add(item))
    // Return union set
    return unionSet
  }

  // Return the intersection of the set and another set
  intersect = (secondSet) => {
    // Create intersection set
    const intersectionSet = new CustomSet()
    // Push each element of this set present in the second set into the intersection set
    this.items().forEach((item) => {
      if (secondSet.has(item)) {
        intersectionSet.add(item)
      }
    })
    // Push each element of second set present in this set into the intersection set
    secondSet.items().forEach((item) => {
      if (this.has(item)) {
        intersectionSet.add(item)
      }
    })
    // Return intersection set
    return intersectionSet
  }

  // Return the difference of the set and another set
  differ = (secondSet) => {
    // Create difference set
    const differenceSet = new CustomSet()
    // Push each element of this set not present in the second set into the difference set
    this.items().forEach((item) => {
      if (!secondSet.has(item)) {
        differenceSet.add(item)
      }
    })
    // Push each element of second set present in this set into the difference set
    secondSet.items().forEach((item) => {
      if (!this.has(item)) {
        differenceSet.add(item)
      }
    })
    // Return difference set
    return differenceSet
  }

  // Check if the set is a subset of another set
  subset = (secondSet) => {
    // If every item inside this set, is present in second set then this set is a subset of second set
    return this.items().every((item) => secondSet.has(item))
  }
}
