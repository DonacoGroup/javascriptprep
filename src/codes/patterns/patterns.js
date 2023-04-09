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
