import Customer from 'objects/Customer'

class CustomerFactory {
  constructor() {

  }

  createCustomer(game) {
    let rectangle = new Phaser.Rectangle(5, 40, 60, 60)
    let p = new Phaser.Point()
    rectangle.random(p)
    p.floor()
    // laol
    let customer = new Customer(game, p.x, p.y, 'customer')
    game.global.customerQueue.add(customer)
  }
}

export default CustomerFactory