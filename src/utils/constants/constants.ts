export const IS_OFFLINE = process.env.IS_OFFLINE

export const STAGE = (IS_OFFLINE ? 'local' : process.env.STAGE || 'local') as
  | 'local'
  | 'dev'
  | 'prod'
