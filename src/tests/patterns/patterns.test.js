/* eslint-disable no-undef */
import { UserFactory, ProcessManagerSingleton, PaymentGateway, ProjectIterator, ProjectEventProducer } from '../../codes/patterns/patterns'
import { VisaGateway, MastercardGateway, MTNMomoGateway, MOOVFloozGateway, Pay8Gateway } from '../../codes/patterns/patterns.utils'
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

  test('Strategy Dsign Pattern Tests with PaymentGateway class', () => {
    PaymentGateway.setStrategy(new VisaGateway())
    const visaResult = PaymentGateway.pay(12)
    expect(visaResult).toBeDefined()
    expect(visaResult.includes('Visa')).toBeTruthy()
    expect(visaResult).toEqual('pay 12.48 USD bill with Visa')

    PaymentGateway.setStrategy(new MastercardGateway())
    const mastercardResult = PaymentGateway.pay(12)
    expect(mastercardResult).toBeDefined()
    expect(mastercardResult.includes('Mastercard')).toBeTruthy()
    expect(mastercardResult).toEqual('pay 12.48 USDbill with Mastercard')

    PaymentGateway.setStrategy(new MTNMomoGateway())
    const mtnmomoResult = PaymentGateway.pay(12)
    expect(mtnmomoResult).toBeDefined()
    expect(mtnmomoResult.includes('MTNMomo')).toBeTruthy()
    expect(mtnmomoResult).toEqual('pay 12.347999999999999 XOF bill with MTNMomo')

    PaymentGateway.setStrategy(new MOOVFloozGateway())
    const moovfloozResult = PaymentGateway.pay(12)
    expect(moovfloozResult).toBeDefined()
    expect(moovfloozResult.includes('MOOVFlooz')).toBeTruthy()
    expect(moovfloozResult).toEqual('pay 12.227999999999998 XOF bill with MOOVFlooz')

    PaymentGateway.setStrategy(new Pay8Gateway())
    const pay8Result = PaymentGateway.pay(12)
    expect(pay8Result).toBeDefined()
    expect(pay8Result.includes('Pay8')).toBeTruthy()
    expect(pay8Result).toEqual('pay 12.120000000000001 Units bill with Pay8')
  })

  test('Iterator Design Pattern Tests with Iterator class', () => {
    const MyIterator = new ProjectIterator([1, 2, 3, 4])
    expect(MyIterator.hasNext()).toBeTruthy()
    expect(MyIterator.next()).toEqual(1)
    expect(MyIterator.hasNext()).toBeTruthy()
    expect(MyIterator.next()).toEqual(2)
    expect(MyIterator.hasNext()).toBeTruthy()
    expect(MyIterator.next()).toEqual(3)
    expect(MyIterator.hasNext()).toBeTruthy()
    expect(MyIterator.next()).toEqual(4)
    expect(MyIterator.hasNext()).toBeFalsy()
    expect(MyIterator.next()).not.toBeDefined()
  })

  test('Observer Design Pattern with ProjectEventProducer class', () => {
    const MyProducer = new ProjectEventProducer()
    let calls = []
    const consumer1 = () => { calls.push('I am consumer 1') }
    const consumer2 = () => { calls.push('I am consumer 2') }
    const consumer3 = () => { calls.push('I am consumer 3') }
    const consumer4 = () => { calls.push('I am consumer 4') }
    MyProducer.subscribe(consumer1)
    MyProducer.subscribe(consumer2)
    MyProducer.subscribe(consumer3)
    MyProducer.subscribe(consumer4)
    MyProducer.notify()
    expect(calls).toHaveLength(4)
    expect(calls[0]).toEqual('I am consumer 1')
    expect(calls).toContain('I am consumer 1')
    expect(calls).toContain('I am consumer 2')
    expect(calls).toContain('I am consumer 3')
    expect(calls).toContain('I am consumer 4')
    calls = []
    MyProducer.unsubscribe(consumer4)
    MyProducer.notify()
    expect(calls).toHaveLength(3)
    expect(calls[2]).toEqual('I am consumer 3')
    expect(calls).toContain('I am consumer 1')
    expect(calls).toContain('I am consumer 2')
    expect(calls).toContain('I am consumer 3')
    expect(calls).not.toContain('I am consumer 4')
  })
  // test('Description', () => {})
})
