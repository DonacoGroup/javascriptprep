/* eslint-disable no-undef */
import { concepts } from '../../codes/concepts/concepts'
import { projects } from './concepts.data'

describe('Concepts Tests', () => {
  test('Map Method Tests with reverserArray()', () => {
    expect(concepts.reverseArray(['hello', 'world!'])).toHaveLength(2)
    expect(concepts.reverseArray(['hello', 'world!'])).toEqual(['olleh', '!dlrow'])
  })

  test('Set|Unique values Tests with removeDuplicates()', () => {
    expect(concepts.removeDuplicates(['Android', 'iOS', 'Android', 'Web']).size).toBe(3)
    expect(concepts.removeDuplicates(projects.map(entry => entry.category)).size).toBe(4)
    expect(typeof concepts.removeDuplicates(projects.map(entry => entry.category))).toEqual(Object)
  })
})
