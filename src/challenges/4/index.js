/**
 * For challenge descripton visit: https://adventofcode.com/2022/day/4
 */
import R from 'ramda'
import fs from 'fs'
import path from 'path'

const parsePairs = R.compose(
  R.map(R.map(R.map(Number))),
  R.map(R.map(R.split('-'))),
  R.map(R.split(','))
)
const contains = R.cond([
  [([x1, x2], [y1, y2]) => R.and(R.lte(x1, y1), R.gte(x2, y2)), R.T],
  [([x1, x2], [y1, y2]) => R.and(R.lte(y1, x1), R.gte(y2, x2)), R.T]
])
const overlaps = R.cond([
  [([x1, x2], [y1]) => R.and(R.lte(x1, y1), R.gte(x2, y1)), R.T],
  [([x1], [y1, y2]) => R.and(R.lte(y1, x1), R.gte(y2, x1)), R.T]
])
const sumContainingPairs = R.compose(
  R.reduce((acc, x) => (contains(...x) ? R.inc(acc) : acc), 0),
  parsePairs
)
const sumOverlapingPairs = R.compose(
  R.reduce((acc, x) => (overlaps(...x) ? R.inc(acc) : acc), 0),
  parsePairs
)

const pairs = fs
  .readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8')
  .split('\n')
const containingPairsSum = sumContainingPairs(pairs)
const overlaingPairsSum = sumOverlapingPairs(pairs)

const challenge3Answers = {
  answer1: containingPairsSum,
  answer2: overlaingPairsSum
}
export default challenge3Answers
