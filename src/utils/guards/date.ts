import * as Df from 'date-fns'

export const isBefore = (target: Date | string, toCompare: Date | string) => {
  return Df.isBefore(new Date(target), new Date(toCompare))
}
export const isValid = (target?: Date | string) => Df.isValid(target)
