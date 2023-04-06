// Factory Design Pattern
class Talent {
  constructor (details) {
    this.details = details
    this.type = 'Talent'
  }
}
class Merchant {
  constructor (details) {
    this.details = details
    this.type = 'Merchant'
  }
}
class Investor {
  constructor (details) {
    this.details = details
    this.type = 'Investor'
  }
}

// Singleton Design Pattern
class Process {
  constructor (name) {
    this.name = name
    this.state = 'Pending'
  }
}

class ProcessManager {
  constructor () {
    this.processes = []
    this.processCount = 0
  }

  add = (process) => {
    this.processes.push(process)
    this.processCount += 1
  }
}

// Strategy Design Pattern

class VisaGateway {
  constructor () {
    this.name = 'Visa'
    this.comission = 0.04
    this.currency = 'USD'
  }

  pay = (amount) => {
    return `pay ${amount * (1 + this.comission)} ${this.currency} bill with Visa`
  }
}

class MastercardGateway {
  constructor () {
    this.name = 'Mastercard'
    this.comission = 0.04
    this.currency = 'USD'
  }

  pay = (amount) => {
    return `pay ${amount * (1 + this.comission)} ${this.currency}bill with Mastercard`
  }
}

class MTNMomoGateway {
  constructor () {
    this.name = 'MTNMomo'
    this.comission = 0.029
    this.currency = 'XOF'
  }

  pay = (amount) => {
    return `pay ${amount * (1 + this.comission)} ${this.currency} bill with MTNMomo`
  }
}

class MOOVFloozGateway {
  constructor () {
    this.name = 'MOOVFlooz'
    this.comission = 0.019
    this.currency = 'XOF'
  }

  pay = (amount) => {
    return `pay ${amount * (1 + this.comission)} ${this.currency} bill with MOOVFlooz`
  }
}

class Pay8Gateway {
  constructor () {
    this.name = 'Pay8'
    this.comission = 0.01
    this.currency = 'Units'
  }

  pay = (amount) => {
    return `pay ${amount * (1 + this.comission)} ${this.currency} bill with Pay8`
  }
}

export { Talent, Merchant, Investor, Process, ProcessManager, VisaGateway, MastercardGateway, MTNMomoGateway, MOOVFloozGateway, Pay8Gateway }
