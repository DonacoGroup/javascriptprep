import { Talent, Merchant, Investor } from './patterns.utils'

// Create a UserFactory to create types of User to demonstrate Factory Design Pattern
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
