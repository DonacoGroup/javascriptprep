/* eslint-disable no-undef */
import { UserFactory } from '../../codes/patterns/patterns'

describe('Patterns Tests', () => {
  test('Factory design pattern Tests with UserFactory', () => {
    const MyUserFactory = new UserFactory()
    const talent1 = MyUserFactory.create({ name: 'Franck' })
    const talent2 = MyUserFactory.create({ name: 'Misha' }, 1)
    const merchant = MyUserFactory.create({ name: 'Boris' }, 2)
    const investor = MyUserFactory.create({ name: 'Mario' }, 3)

    expect(talent1).toBeDefined()
    expect(talent1.details.name).toEqual('Franck')
    expect(talent1.type).toEqual('Talent')

    expect(talent2).toBeDefined()
    expect(talent2.details.name).toEqual('Misha')
    expect(talent2.type).toEqual('Talent')

    expect(merchant).toBeDefined()
    expect(merchant.details.name).toEqual('Boris')
    expect(merchant.type).toEqual('Merchant')

    expect(investor).toBeDefined()
    expect(investor.details.name).toEqual('Mario')
    expect(investor.type).toEqual('Investor')
  })
  // test('Description', () => {})
})
