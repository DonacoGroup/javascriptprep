import { Talent, Merchant, Investor, Process, ProcessManager } from './patterns.utils'

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
