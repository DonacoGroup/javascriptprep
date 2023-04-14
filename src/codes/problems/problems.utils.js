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

// Create a queue
export class Queue {
  constructor () {
    this.collection = []
  }

  // Get queue items
  items = () => this.collection

  // Get queue size
  size = () => this.collection.length

  // Check if queue is empty
  isEmpty = () => this.collection.length === 0

  // Contains item
  has = (item) => this.collection.includes(item)

  // Add item to queue
  enqueue = (item) => this.collection.push(item)

  // Remove item from the queue
  dequeue = () => this.collection.shift()

  // Take a peek at the item at the front of the queue
  peek = () => this.collection[0]

  // Take a peek at the item at the end of the queue
  tail = () => this.collection[this.collection.length - 1]
}

// Create a priority queue
export class PriorityQueue extends Queue {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }

  // Contains item
  has = (item) => {
    if (!this.isEmpty()) {
      for (let i = 0; i < this.collection.length; i++) {
        const currentItem = this.collection.at(i)
        if (currentItem.value === item.value && currentItem.priority === item.priority) {
          return true
        }
      }
    }
    return false
  }

  // Add item to queue
  enqueue = (item) => {
    // If collection is empty simply push item to the collection
    if (this.isEmpty()) {
      this.collection.push(item)
    } else {
      // Otherwise
      // Create flag to indicate whether item was added or not
      let added = false
      // For each item in collection if the item to insert has lower priority then isert the item right before it
      this.collection.forEach((currentItem, index) => {
        if (!added && item.priority < currentItem.priority) {
          this.collection.splice(index, 0, item)
          added = true
        }
      })
      // If item was not added from previous operationon the collection simply push item to the collection (There was no item with greater priority than the item to insert)
      if (!added) {
        this.collection.push(item)
      }
    }
    return true
  }
}

// Create tree's node class
export class TreeNode {
  constructor (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

// Create a binary search tree
export class BinarySearchTree {
  constructor (root = null) {
    this.root = root
  }

  // Check if empty 
  isEmpty = () => this.root === null

  // Traverse the tree to find where to insert the data
  insert = (node, data) => {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new TreeNode(data)
      } else {
        return this.insert(node.left, data)
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new TreeNode(data)
      } else {
        return this.insert(node.right, data)
      }
    }
  }

  // Add data to the binary search tree
  add = (data) => {
    // If there is no root in the tree, then add data as node
    if (this.root === null) {
      this.root = new TreeNode(data)
    } else {
      this.insert(this.root, data)
    }
  }

  // Find min value in tree
  min = () => {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  // Find maximum value in tree
  max = () => {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  // Find data
  find = (node, data) => {
    let current = node
    if (data < current.data) {
      current = current.left
      if (current.data === data) {
        return current
      }
    } else if (data > current.data) {
      current = current.right
      if (current.data === data) {
        return current
      }
    }
    return this.find(current, data)
  }

  // Search data
  search = (data) => {
    if (this.root && this.root.data === data) {
      return this.root
    } else {
      return this.find(this.root, data)
    }
  }
  // Remove data
}
