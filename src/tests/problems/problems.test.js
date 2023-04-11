/* eslint-disable no-undef */
import { problems } from '../../codes/problems/problems'

describe('Problems Tests', () => {
  test('TripleAdd Function Problem', () => {
    expect(problems.tripleAdd(10)(20)(30)).toEqual(60)
  })
  test('Track Calls Function Problem', () => {
    const firstInstance = problems.trackCalls()
    const secondInstance = problems.trackCalls()
    expect(firstInstance().counter).toEqual(1)
    expect(firstInstance().counter).toEqual(2)
    expect(secondInstance().counter).toEqual(1)
    expect(secondInstance().counter).toEqual(2)
  })
  // test('Description', () => {})
})
