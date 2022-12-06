/**
 * For challenge descripton visit: https://adventofcode.com/2022/day/1
 */
import * as R from 'ramda'
import fs from 'fs'
import path from 'path'

const sumCalGroups = R.compose(
  R.map(R.sum),
  R.map(R.map(Number)),
  R.groupWith((_, y) => R.not(R.isEmpty(y)))
)
const sumMaxCalGroup = R.compose(
  R.reduce(R.max, Number.MIN_SAFE_INTEGER),
  sumCalGroups
)
const sumMaxThreeCalGroups = R.compose(
  R.sum,
  R.slice(-3, Infinity),
  R.sortBy(R.identity),
  sumCalGroups
)

const cals = fs
  .readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8')
  .split('\n')
const maxCalGroupSum = sumMaxCalGroup(cals)
const maxThreeCalGroupsSum = sumMaxThreeCalGroups(cals)

const challenge1Answers = {
  answer1: maxCalGroupSum,
  answer2: maxThreeCalGroupsSum
}
export default challenge1Answers
