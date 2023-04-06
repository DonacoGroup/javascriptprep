/* eslint-disable no-undef */
import { concepts } from '../../codes/concepts/concepts'
import { projects } from './concepts.data'

describe('Concepts Tests', () => {
  // test('Description', () => {})

  test('Map Method Tests with reverserArray()', () => {
    expect(concepts.reverseArray(['hello', 'world!'])).toHaveLength(2)
    expect(concepts.reverseArray(['hello', 'world!'])).toEqual(['olleh', '!dlrow'])
  })

  test('Set|Unique values Tests with removeDuplicates() and listProjectCategories()', () => {
    expect(concepts.removeDuplicates(['Android', 'iOS', 'Android', 'Web']).size).toBe(3)
    expect(concepts.removeDuplicates(projects.map(entry => entry.category)).size).toBe(4)
    expect(typeof concepts.removeDuplicates(projects.map(entry => entry.category))).toEqual('object')
    expect(concepts.listProjectCategories(projects.map(entry => entry.category))).toEqual(['all', 'android', 'desktop', 'ios', 'web'])
  })

  test('Dynamic object creation Tests with addKeyValue()', () => {
    let dynamicObject = {}
    dynamicObject = concepts.addKeyValue(dynamicObject, 'key', 'value')
    expect(dynamicObject).toBeDefined()
    expect(Object.keys(dynamicObject)).toContain('key')
    expect(Object.values(dynamicObject)).toContain('value')
  })

  test('Filter Method Tests with filterProjects()', () => {
    expect(concepts.filterProjects(projects, 'Android')).toHaveLength(3)
    expect(concepts.filterProjects(projects, 'android')).toHaveLength(3)
    expect(concepts.filterProjects(projects, 'desktop')).toHaveLength(2)
  })

  test('Find Method Tests with findProject()', () => {
    expect(concepts.findProject(projects, 'Project 1')).toBeDefined()
    expect(concepts.findProject(projects, 'project 1')).toBeDefined()
    expect(concepts.findProject(projects, 'Project 0')).toBeUndefined()
  })

  test('Reduce Method Tests with averageProjectsProfit()', () => {
    expect(concepts.averageProjectsProfit(projects)).toEqual(10430)
    expect(concepts.calculateSumAverageOfProfits(projects)).toEqual({ profits: 104300, average: 10430 })
  })

  test('Array Destructuring with swapValues()', () => {
    let a = '1'
    let b = '2';
    [b, a] = concepts.swapValues(a, b)
    expect(a).toEqual('2')
    expect(b).toEqual('1')
  })

  test('Object Destructuring with getProjectLead()', () => {
    expect(concepts.getProjectLead(projects, 'Project 1')).toEqual('John DOE')
    expect(concepts.getProjectLead(projects, 'project 1')).toEqual('John DOE')
  })

  test('Chunking using Array.from with listChunkedProjects()', () => {
    expect(concepts.listChunkedProjects(projects, 2)).toHaveLength(5)
    expect(concepts.listChunkedProjects(projects, 3)).toHaveLength(4)
    expect(concepts.listChunkedProjects(projects, 3)[3]).toHaveLength(1)
    expect(concepts.listChunkedProjects(projects, 5)).toHaveLength(2)
  })

  test('Promise Tests with createPromise()', () => {})
  // test('Description', () => {})
})
