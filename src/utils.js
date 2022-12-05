import R from 'ramda'

export const intersectionN = (first, ...rest) => {
  return R.reduce((acc, x) => R.intersection(acc, x), first, rest)
}

export const ireduce = R.addIndex(R.reduce)
