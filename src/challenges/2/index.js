/**
 * For challenge descripton visit: https://adventofcode.com/2022/day/2
 */
import * as R from 'ramda'
import fs from 'fs'
import path from 'path'

// TO-DO: REWRITE!
const SHAPES = {
  rock: { aliases: ['A', 'X'], worth: 1, beats: 'scissors', losesTo: 'paper' },
  paper: { aliases: ['B', 'Y'], worth: 2, beats: 'rock', losesTo: 'scissors' },
  scissors: { aliases: ['C', 'Z'], worth: 3, beats: 'paper', losesTo: 'rock' }
}
const ROUND_OUTCOME = { win: 6, draw: 3, lose: 1 }

const calcTotalCore = R.compose(
  R.reduce((acc, [p1Move, p2Move]) => {
    R.find(R.propEq())
  }, 0),
  R.map(R.map(R.find(SHAPES))),
  R.map(R.split(' '))
)

const encryptedStrategyGuide = fs
  .readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8')
  .split('\n')

// const pathToData = path.resolve(__dirname, "data.txt");
// const encryptedStrategyGuide = parseFile(pathToData);

// const MOVES = {
//   X: 1,
//   Y: 2,
//   Z: 3
// };

// const MOVES = {
//   'A X': 3,
//   'A Y': 1,
//   'A Z': 2,
//   'B X': 1,
//   'B Y': 2,
//   'B Z': 3,
//   'C X': 2,
//   'C Y': 3,
//   'C Z': 1
// }

// const OUTCOMES = {
//   'A X': 0,
//   'A Y': 3,
//   'A Z': 6,
//   'B X': 0,
//   'B Y': 3,
//   'B Z': 6,
//   'C X': 0,
//   'C Y': 3,
//   'C Z': 6
// }

// const calcRoundScore = (totalScore, round) => {
//   const [, playerMove] = round.split(' ')

//   return totalScore + MOVES[round] + OUTCOMES[round]
// }

// const totalScore = encryptionGuide.reduce(calcRoundScore, 0)
// // console.log({ totalScore });

const challenge2Anaswers = {
  answer1: null,
  answer2: null
}

export default challenge2Anaswers
