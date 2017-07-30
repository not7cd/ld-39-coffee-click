class Preloader extends Phaser.State {

  preload() {
    this.load.image('shopBackground', 'assets/images/shop.png')
    this.load.image('coffee', 'assets/images/coffee.png')
    this.load.image('machine', 'assets/images/machine1.png')
    this.load.image('energyBar', 'assets/images/energy-bar.png')
    this.load.image('customer', 'assets/images/customer.png')
    this.load.image('player', 'assets/images/coffee-guy.png')
    this.load.image('bottomPanel', 'assets/images/statpanel.png')

    this.load.bitmapFont('defaultFont', 'assets/fonts/font.png', 'assets/fonts/font.fnt')
    this.load.bitmapFont('panelFont', 'assets/fonts/panelFont.png', 'assets/fonts/font.fnt')
  }

  create() {
    this.state.start('CoffeeShop')
  }
}

export default Preloader
