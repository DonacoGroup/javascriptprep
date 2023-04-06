/* eslint-disable no-undef */
import { UserFactory, ProcessManagerSingleton } from '../../codes/patterns/patterns'
import { processes } from './patterns.data'

describe('Patterns Tests', () => {
  test('Factory design pattern Tests with UserFactory class', () => {
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

  test('Singleton design pattern Tests with ProcessManagerSingleton class', () => {
    const pM1 = ProcessManagerSingleton.getProcessManager()
    const pM2 = ProcessManagerSingleton.getProcessManager()

    expect((pM1 === pM2)).toBeTruthy()
    expect(pM1.processes).toHaveLength(0)
    expect(pM1.processCount).toEqual(0)

    pM1.add(processes[1])
    pM2.add(processes[2])

    expect((pM1 === pM2)).toBeTruthy()
    expect(pM1.processes).toHaveLength(2)
    expect(pM1.processes[0].name).toEqual('AndroidStudio')
    expect(pM1.processes[0].state).toEqual('Pending')
    expect(pM1.processCount).toEqual(2)
  })

  // test('Description', () => {})
})
