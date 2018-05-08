const argv = require('yargs').argv

class Game {
  constructor(roshamboo) {
    this.roshamboo = roshamboo
  }
  evaluate(userMove, computerMove) {
    if(userMove && computerMove) {
      if (userMove === 'rock' && computerMove === 'paper' ||
          userMove === 'paper' && computerMove === 'scissors' ||
          userMove === 'scissors' && computerMove === 'rock'
          )
          {
            console.log('~Computer wins.~')
          } else if (userMove === 'rock' && computerMove === 'rock' ||
                    userMove === 'paper' && computerMove === 'paper' ||
                    userMove === 'scissors' && computerMove === 'scissors'
                    )
                    {
                      console.log('~ You are even.~')
                    } else {
                      console.log('~User wins.~')
                    }
    }
  }
}

class ComputerMove extends Game {
  constructor() {
    super(roshamboo)
  }
  setMove() {
    return this.roshamboo[Math.floor(Math.random() * this.roshamboo.length)]
  }
}

class UserMove extends Game {
  constructor() {
    super(roshamboo)
  }
  getMove(value) {
    return value
  }
}
const roshamboo = ['rock', 'paper', 'scissors']
const userInput = argv.move
console.log('userInput', argv.move)
const game = new Game()
const userMove = new UserMove()
const computerMove = new ComputerMove()
const input = userMove.getMove(userInput)
const output = computerMove.setMove()
console.log('input and output', input, output)
game.evaluate(input, output)

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }
