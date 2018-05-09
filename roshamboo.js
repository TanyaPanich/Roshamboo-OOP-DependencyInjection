//check if there is a DEPENDENCY INJECTION
const argv = require('yargs').argv
const roshamboo = ['rock', 'paper', 'scissors']

class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }
  evaluate() {
    let move1 = this.player1.getMove()
    let move2 = this.player2.getMove()
    console.log(this.player1.getName(), ':', move1)
    console.log(this.player2.getName(), ':', move2)

    if (move1 === 'rock' && move2 === 'paper' ||
        move1 === 'paper' && move2 === 'scissors' ||
        move1 === 'scissors' && move2 === 'rock')
    {
      console.log(`~${this.player2.getName()} wins.~`)
    } else if (move1 === 'rock' && move2 === 'rock' ||
               move1 === 'paper' && move2 === 'paper' ||
               move1 === 'scissors' && move2 === 'scissors')
    {
      console.log('~ You are even.~')
    } else {
      console.log(`~${this.player1.getName()} wins.~`)
    }
  }
}

class ComputerMove {
  constructor() {}
  getMove() {
    return roshamboo[Math.floor(Math.random() * roshamboo.length)]
  }
  getName() {
    return "Computer"
  }
}

class UserMove {
  constructor(value) {
    this.value = value
  }
  getMove() {
    return this.value
  }
  getName() {
    return "User"
  }
}
const userInput = argv.move
const game = new Game(new UserMove(userInput), new ComputerMove())
game.evaluate()
