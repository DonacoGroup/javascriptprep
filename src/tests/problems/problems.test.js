/* eslint-disable no-undef */
import { problems } from '../../codes/problems/problems'
import { Stack, Queue, PriorityQueue, CustomSet, BinarySearchTree } from '../../codes/problems/problems.utils'

describe('Problems Tests', () => {
  test('TripleAdd Function Problem Tests', () => {
    expect(problems.tripleAdd(10)(20)(30)).toEqual(60)
  })
  test('Track Calls Function Problem Tests', () => {
    const firstInstance = problems.trackCalls()
    const secondInstance = problems.trackCalls()
    expect(firstInstance().counter).toEqual(1)
    expect(firstInstance().counter).toEqual(2)
    expect(secondInstance().counter).toEqual(1)
    expect(secondInstance().counter).toEqual(2)
  })
  test('Palindrome Problem Tests', () => {
    expect(problems.solvePalindromeWithArray('Mia')).toBeFalsy()
    expect(problems.solvePalindromeWithArray('Level')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Racecar')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Madam')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Radar')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Deified')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Civic')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Noon')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Kayak')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Hannah')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Refer')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Rotator')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Pop')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Mom')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Dad')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Eye')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('A man, a plan, a canal, Panama!')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Never odd or even')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('A Santa, at NASA!')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Was it a car or a cat I saw?')).toBeTruthy()
    expect(problems.solvePalindromeWithArray('Madam, in Eden, I\'m Adam.')).toBeTruthy()
  })

  test('Palindrome Problem Tests with Stack class and solvePalindromeWithStack() ', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.peek()).toEqual(1)
    stack.push(2)
    expect(stack.peek()).toEqual(2)
    stack.push(3)
    expect(stack.peek()).toEqual(3)
    expect(stack.pop()).toEqual(3)
    expect(stack.peek()).toEqual(2)
    expect(stack.pop()).toEqual(2)
    expect(stack.peek()).toEqual(1)
    expect(stack.pop()).toEqual(1)
    expect(stack.peek()).toEqual(undefined)
    expect(stack.items()).toHaveLength(3)
    expect(stack.size()).toEqual(0)
    expect(problems.solvePalindromeWithStack('Mia')).toBeFalsy()
    expect(problems.solvePalindromeWithStack('Level')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Racecar')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Madam')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Radar')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Deified')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Civic')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Noon')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Kayak')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Hannah')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Refer')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Rotator')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Pop')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Mom')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Dad')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Eye')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('A man, a plan, a canal, Panama!')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Never odd or even')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('A Santa, at NASA!')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Was it a car or a cat I saw?')).toBeTruthy()
    expect(problems.solvePalindromeWithStack('Madam, in Eden, I\'m Adam.')).toBeTruthy()
  })
  test('Custom Set Implementation Tests with CustomSet class', () => {
    const customSet1 = new CustomSet()
    expect(customSet1.add(1)).toBeTruthy()
    expect(customSet1.add(2)).toBeTruthy()
    expect(customSet1.items()).toHaveLength(2)
    expect(customSet1.add(2)).toBeFalsy()
    expect(customSet1.has(2)).toBeTruthy()
    expect(customSet1.items()).toHaveLength(2)
    expect(customSet1.has(3)).toBeFalsy()
    expect(customSet1.add(3)).toBeTruthy()
    expect(customSet1.items()).toHaveLength(3)
    expect(customSet1.remove(3)).toBeTruthy()
    expect(customSet1.remove(3)).toBeFalsy()
    const customSet2 = new CustomSet()
    expect(customSet2.add(3)).toBeTruthy()
    expect(customSet2.add(4)).toBeTruthy()
    expect(customSet2.add(5)).toBeTruthy()
    expect(customSet2.add(6)).toBeTruthy()
    expect(customSet2.add(7)).toBeTruthy()
    expect(customSet2.add(8)).toBeTruthy()

    expect(customSet1.union(customSet2)).toBeDefined()
    expect(typeof customSet1.union(customSet2)).toBe('object')
    expect(customSet1.union(customSet2).size()).toBe(8)

    expect(customSet1.intersect(customSet2)).toBeDefined()
    expect(typeof customSet1.intersect(customSet2)).toBe('object')
    expect(customSet1.intersect(customSet2).size()).toBe(0)

    expect(customSet1.differ(customSet2)).toBeDefined()
    expect(typeof customSet1.differ(customSet2)).toBe('object')
    expect(customSet1.differ(customSet2).size()).toBe(8)

    expect(customSet1.subset(customSet2)).toBeFalsy()
    expect(customSet1.subset(customSet1.union(customSet2))).toBeTruthy()
  })

  test('Custom Queue Implementation Tests with Queue class', () => {
    const customQueue = new Queue()
    expect(customQueue.isEmpty()).toBeTruthy()
    expect(customQueue.has(1)).toBeFalsy()
    expect(customQueue.enqueue(1)).toEqual(1)
    expect(customQueue.enqueue(2)).toEqual(2)
    expect(customQueue.enqueue(3)).toEqual(3)
    expect(customQueue.enqueue(4)).toEqual(4)
    expect(customQueue.has(1)).toBeTruthy()
    expect(customQueue.items()).toHaveLength(4)
    expect(customQueue.size()).toEqual(4)
    expect(customQueue.isEmpty()).toBeFalsy()
    expect(customQueue.peek()).toEqual(1)
    expect(customQueue.tail()).toEqual(4)
    expect(customQueue.dequeue()).toEqual(1)
    expect(customQueue.dequeue()).toEqual(2)
    expect(customQueue.size()).toEqual(2)
    expect(customQueue.has(1)).toBeFalsy()
    expect(customQueue.has(2)).toBeFalsy()
    expect(customQueue.has(3)).toBeTruthy()
    expect(customQueue.has(4)).toBeTruthy()
    expect(customQueue.items()).toHaveLength(2)
  })
  test('Custom Priority Queue Implementation Tests with PriorityQueue class', () => {
    const pQueue = new PriorityQueue()
    expect(pQueue.items()).toHaveLength(0)
    expect(pQueue.size()).toEqual(0)
    expect(pQueue.isEmpty()).toBeTruthy()
    expect(pQueue.has({ value: 1, priority: 0 })).toBeFalsy()
    expect(pQueue.enqueue({ value: 1, priority: 0 })).toBeTruthy()
    expect(pQueue.has({ value: 1, priority: 0 })).toBeTruthy()
    expect(pQueue.isEmpty()).toBeFalsy()
    expect(pQueue.items()).toHaveLength(1)
    expect(pQueue.enqueue({ value: 2, priority: 1 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(2)
    expect(pQueue.enqueue({ value: 3, priority: 2 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(3)
    expect(pQueue.enqueue({ value: 4, priority: 1 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(4)
    expect(pQueue.enqueue({ value: 5, priority: 5 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(5)
    expect(pQueue.enqueue({ value: 6, priority: 4 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(6)
    expect(pQueue.enqueue({ value: 7, priority: 4 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(7)
    expect(pQueue.enqueue({ value: 8, priority: 4 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(8)
    expect(pQueue.enqueue({ value: 9, priority: 4 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(9)
    expect(pQueue.enqueue({ value: 10, priority: 0 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(10)
    expect(pQueue.enqueue({ value: 20, priority: 1 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(11)
    expect(pQueue.enqueue({ value: 30, priority: 2 })).toBeTruthy()
    expect(pQueue.items()).toHaveLength(12)
    expect(pQueue.size()).toEqual(12)
    expect(pQueue.dequeue()).toEqual({ value: 1, priority: 0 })
    expect(pQueue.peek()).toEqual({ value: 10, priority: 0 })
    expect(pQueue.tail()).toEqual({ value: 5, priority: 5 })
  })

  test('Custom Binary Search Tree implementation with BinarySearchTree class', () => {
    const bst = new BinarySearchTree()
    bst.add(50)
    bst.add(17)
    bst.add(72)
    bst.add(12)
    bst.add(23)
    bst.add(54)
    bst.add(76)
    bst.add(67)
    bst.add(19)
    bst.add(14)
    bst.add(9)

    expect(bst.root.data).toEqual(50)
    expect(bst.root.left).toBeDefined()
    expect(bst.root.left.data).toEqual(17)
    expect(bst.root.right).toBeDefined()
    expect(bst.root.right.data).toEqual(72)

    expect(bst.min()).toEqual(9)
    expect(bst.max()).toEqual(76)

    expect(bst.search(76)).toBeDefined()
    expect(bst.search(76).data).toEqual(76)
  })
  // test('Description', () => {})
})
