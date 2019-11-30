import { hotelRepository } from '@hotels/resources/repository/hotel-repository'

export const handler = async () => {
  const data = await hotelRepository.findById('1')
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ data }),
  }
}
