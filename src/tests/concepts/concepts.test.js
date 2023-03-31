/* eslint-disable no-undef */
import { concepts } from '../../codes/concepts/concepts'

describe('Concepts Tests', () => {
  test('Map Method Tests with reverserArray()', () => {
    expect(concepts.reverseArray(['hello', 'world!'])).toHaveLength(2)
    expect(concepts.reverseArray(['hello', 'world!'])).toEqual(['olleh', '!dlrow'])
  })
})
