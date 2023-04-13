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
