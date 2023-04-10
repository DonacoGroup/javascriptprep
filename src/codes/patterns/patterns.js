import { Talent, Merchant, Investor, ProcessManager } from './patterns.utils'

// Create a UserFactory class to create types of User to demonstrate Factory Design Pattern
export class UserFactory {
  // constructor(){}
  create = (details, type) => {
    switch (type) {
      case 1:
        return new Talent(details)
      case 2:
        return new Merchant(details)
      case 3:
        return new Investor(details)
      default:
        return new Talent(details)
    }
  }
}

// Create a ProcessManagerSingleton class to create an object that instantiate only once to demonstrate the Singleton Design Pattern
export class ProcessManagerSingleton {
  // Declare a reference variable for the process manager
  static processManager

  // Create a processmanager instance from within the singleton
  static createProcessManager = () => {
    this.processManager = new ProcessManager()
    return this.processManager
  }

  static getProcessManager = () => {
    return this.processManager ? this.processManager : this.createProcessManager()
  }
}

// Create PaymentGateway class to demonstrate the Strategy Design Pattern
export class PaymentGateway {
  constructor () {
    this.gateway = null
  }

  static setStrategy = (gateway) => {
    this.gateway = gateway
  }

  static pay = (amount) => {
    return this.gateway.pay(amount)
  }
}

// Create ProjectIterator class to iterate through projects to demonstrate Iterator Design Pattern
export class ProjectIterator {
  constructor (items) {
    this.items = items
    this.index = 0
  }

  // Check if there is a next item present in items or whether we've reach the end of the list
  hasNext = () => {
    return this.index < this.items.length
  }

  // Get next element
  next = () => {
    return this.items[this.index++]
  }
}

// Create ProjectEventProducer class that notifies or call consumers of events on projects to demonstrate Observer Design Pattern
export class ProjectEventProducer {
  constructor () {
    this.consumers = []
  }

  // Subscribe a consumer
  subscribe = (fn) => {
    this.consumers.push(fn)
  }

  // Unsubscribe a consumer
  unsubscribe = (fnToUnsubscribe) => {
    this.consumers = this.consumers.filter((fn) => fn !== fnToUnsubscribe)
  }

  // Notify consumers
  notify = () => {
    this.consumers.forEach((fn) => fn.call())
  }
}

// Create ProjectAPIProxy class that caches successfull network response for efficient use of bandwidth to demonstrate Proxy Design Pattern
export class ProjectAPIProxy {
  constructor () {
    this.cache = {}
  }

  // Call API endpoint function
  fetch = (endpointFn) => {
    // If cache does not contain specific key ie name of endpointFn
    if (!Object.keys(this.cache).includes(endpointFn.name)) {
      // Make the call to the endpointFn
      const response = endpointFn.call()
      this.cache[endpointFn.name] = response
      return response
    } else {
      // Else return its cached response
      return this.cache[endpointFn.name]
    }
  }
}

// Create ChatRoom class that manages conversations between members to demonstrate Mediator Design Pattern
export class ChatRoom {
  constructor (name) {
    this.name = name
    this.members = []
    this.messages = []
  }

  // Add members to chatroom
  addMembers = (...members) => {
    members.forEach(member => this.members.push(member))
  }

  // Send message to chatroom members
  send = (message, fromMember, toMember) => {
    const messageSent = new Message(message, fromMember, toMember)
    this.messages.push(messageSent)
    this.receive(messageSent)
  }

  // Receive message from member
  receive = (message) => {
    // Recipient is called upon to save this chatroom in his chatrooms records
    const recipient = this.members.find(member => member.name === message.to.name)
    recipient.receive(message, this)
  }
}

export class Message {
  constructor (content, from, to) {
    this.content = content
    this.from = from
    this.to = to
  }
}

export class Member {
  constructor (name) {
    this.name = name.replace(/\s+/g, '_').toLowerCase()
    this.chatrooms = []
  }

  // Send message to member
  send = (message, toMember) => {
    // If chatroom exists then proceed else create it
    let chatroom
    const chatRoomNames = [`chatroom_${this.name}_${toMember.name}`.toLowerCase(), `chatroom_${toMember.name}_${this.name}`.toLowerCase()]
    if (this.chatrooms.length > 0) {
      chatroom = this.chatrooms.find(chatroom => chatRoomNames.includes(chatroom.name))
    }
    if (!chatroom) {
      chatroom = new ChatRoom(chatRoomNames[0])
      chatroom.addMembers(this, toMember)
    }
    // Use the chatroom as mediator
    chatroom.send(message, this, toMember)
    this.chatrooms.push(chatroom)
    return chatroom
  }

  // Receive a message
  receive = (message, chatroom) => {
    // console.log(`Message received: ${message.content} from ${message.from.name}`)
    this.chatrooms.push(chatroom)
  }
}

// Create Product class, that accepts useHalfCoupon; useThirdCoupon, useFourthCoupon functions to apply coupon to Product on checkout to demonstrate Visitor Design Pattern
export class Product {
  constructor (name, description, price) {
    this.name = name
    this.description = description
    this.price = price
  }

  // Getters and Setters
  getPrice = () => { return this.price }
  setPrice = (price) => { this.price = price }
  accept = (visitorFn) => { visitorFn(this) }
}

export const useHalfCoupon = (product) => { product.setPrice(product.getPrice() - (product.getPrice() * 0.5)) }
export const useThirdCoupon = (product) => { product.setPrice(product.getPrice() - (product.getPrice() * 0.33)) }
export const useFourthCoupon = (product) => { product.setPrice(product.getPrice() - (product.getPrice() * 0.25)) }
