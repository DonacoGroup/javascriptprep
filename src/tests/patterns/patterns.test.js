/* eslint-disable no-undef */
import { UserFactory, ProcessManagerSingleton, PaymentGateway, ProjectIterator, ProjectEventProducer, ProjectAPIProxy, ChatRoom, Member, Product, useFourthCoupon, useThirdCoupon, useHalfCoupon } from '../../codes/patterns/patterns'
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

  test('Proxy Design Pattern Tests with ProjectAPIProxy class', async () => {
    const endpointFn1 = () => {
      setTimeout(() => { }, 200)
      return 'fn1'
    }
    const endpointFn2 = () => {
      setTimeout(() => { }, 250)
      return 'fn2'
    }
    const MyProjectAPIProxy = new ProjectAPIProxy()

    const timestamps = []
    const values = []
    timestamps[0] = Date.now()
    values[0] = await MyProjectAPIProxy.fetch(endpointFn1)
    timestamps[1] = Date.now()

    timestamps[2] = Date.now()
    values[1] = await MyProjectAPIProxy.fetch(endpointFn1)
    timestamps[3] = Date.now()

    expect(timestamps[1] - timestamps[0]).toBeGreaterThanOrEqual(timestamps[3] - timestamps[2])
    expect(values[0]).toEqual('fn1')
    expect(values[0]).toEqual(values[1])

    timestamps[4] = Date.now()
    values[2] = await MyProjectAPIProxy.fetch(endpointFn2)
    timestamps[5] = Date.now()

    timestamps[6] = Date.now()
    values[3] = await MyProjectAPIProxy.fetch(endpointFn2)
    timestamps[7] = Date.now()

    expect(timestamps[5] - timestamps[4]).toBeGreaterThanOrEqual(timestamps[7] - timestamps[6])
    expect(values[2]).toEqual('fn2')
    expect(values[2]).toEqual(values[3])
  })

  test('Mediator Design Pattern Tests with ChatRoom class', () => {
    // Create 2 members
    const member1 = new Member('Member 1')
    const member2 = new Member('Member 2')
    // Member 1 sends message to Member 2 (This is their first conversation, a chatroom needs to be created with this 2 as members)
    const chatroom1 = member1.send('Hello Member 2', member2)
    // Member 2  replies to his message
    const chatroom2 = member2.send('Hi Member 1', member1)
    // Testing chatrooms
    expect(typeof chatroom1).toEqual(typeof new ChatRoom('1'))
    // expect(chatroom1).toEqual(chatroom2)
    expect(chatroom1.name).toEqual(`chatroom_${member1.name}_${member2.name}`.toLowerCase())
    expect(chatroom1.name).toEqual(chatroom2.name)
  })

  test('Visitor Design Pattern Tests with Product class', () => {
    const mlBook = new Product('Enterprise Machine Learning', 'A machine learning book for enriching enterprise product', 100)
    expect(mlBook.getPrice()).toEqual(100)

    mlBook.accept(useHalfCoupon)
    expect(mlBook.getPrice()).toEqual(50)

    mlBook.accept(useThirdCoupon)
    expect(mlBook.getPrice()).toEqual(33.5)

    mlBook.accept(useFourthCoupon)
    expect(mlBook.getPrice()).toEqual(25.125)
  })
  // test('Description', () => {})
})
