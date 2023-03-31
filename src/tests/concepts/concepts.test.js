import { describe, test, expect } from 'jest'
import { concepts } from '../../codes/concepts/concepts'

describe('Concepts Tests', () => {
  test('Map Method Tests', () => {
    expect(concepts.reverseArray(['hello', 'world!'])).toHaveLength(2)
    expect(concepts.reverseArray(['hello', 'world!'])).toEqual(['olleh', '!dlrow'])
  })
})
