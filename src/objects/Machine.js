import Coffee from 'objects/Coffee'
import Clickable from 'abstracts/Clickable'

class Machine extends Clickable {
  constructor(game, x, y) {
    super(game, x, y, 'machine')

    this.game.stage.addChild(this);

    this.inputEnabled = true;
    // this.events.onInputOver.add(this.action, this);
    this.events.onInputDown.add(this.action, this);
  }

  action() {
    this.game.global.energy -= 5;
    console.log(this.game.global.energy);
    let rectangle = new Phaser.Rectangle(85, 40, 15, 60);
    let p = new Phaser.Point()
    rectangle.random(p)
    p.floor()
    let coffee = new Coffee(this.game, p.x, p.y)
    // TODO: change this global nonsense
    this.game.global.coffeeCounter.add(coffee)
  }
}

export default Machine
