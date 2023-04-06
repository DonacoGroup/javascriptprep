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

export { Talent, Merchant, Investor, Process, ProcessManager }
