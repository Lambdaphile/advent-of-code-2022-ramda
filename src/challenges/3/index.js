/**
 * For challenge descripton visit: https://adventofcode.com/2022/day/3
 */
import * as R from 'ramda'
import fs from 'fs'
import path from 'path'
import { intersectionN, ireduce } from '../../utils'
import { aZ } from '../../constants'

const PRIORITIES = ireduce(
  (acc, x, i) => {
    acc[x] = R.inc(i)
    return acc
  },
  {},
  R.split('', aZ)
)

const mapItemTypes = R.compose(
  R.map((x) => PRIORITIES[x]),
  ([x, y]) => R.intersection(x, y),
  (x) => R.splitAt(x.length / 2, x),
  R.split('')
)
const sumItemTypes = R.compose(R.sum, R.map(mapItemTypes))
const sumItemGroupTypes = R.compose(
  R.sum,
  R.map((x) => PRIORITIES[x]),
  R.map((x) => intersectionN(...x)),
  R.map(R.map(R.split(''))),
  R.splitEvery(3)
)

const rugsacks = fs
  .readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8')
  .split('\n')
const itemTypesSum = sumItemTypes(rugsacks)
const itemGroupTypesSum = sumItemGroupTypes(rugsacks)

const challenge3Answers = {
  answer1: itemTypesSum,
  answer2: itemGroupTypesSum
}
export default challenge3Answers
