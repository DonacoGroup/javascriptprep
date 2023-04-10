/* eslint-disable no-undef */
import { problems } from '../../codes/problems/problems'

describe('Problems Tests', () => {
  test('TripleAdd Function Problem', () => {
    expect(problems.tripleAdd(10)(20)(30)).toEqual(60)
  })
  // test('Description', () => {})
})
