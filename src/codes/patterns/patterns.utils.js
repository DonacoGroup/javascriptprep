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

export { Talent, Merchant, Investor }
