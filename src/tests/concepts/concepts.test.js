/* eslint-disable no-undef */
import { concepts } from '../../codes/concepts/concepts'
import { projects } from './concepts.data'

describe('Concepts Tests', () => {
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
})
