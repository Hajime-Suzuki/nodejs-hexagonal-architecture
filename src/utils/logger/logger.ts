const info = (...data: any[]) => {
  console.log(data)
}
const error = (...data: any[]) => {
  console.error(data)
}

export const logger = {
  info,
  error,
}
