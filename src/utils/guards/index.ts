import { isValid, isBefore } from './date'

const isNotDefined = (target: Record<string, any>) => {
  return Object.entries(target).reduce<string[]>((map, [key, value]) => {
    if (value === undefined || value === null) map.push(key)
    return map
  }, [])
}

export const Guards = {
  isNotDefined,
  isValid,
  isBefore,
}
