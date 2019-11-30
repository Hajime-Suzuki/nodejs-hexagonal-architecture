type HotelId = string

export type Hotel = {
  id: HotelId
  type: string
  name: string
  address: Address
}

type Address = {
  street: string
  city: string
  state: string
  postalCode: string
}
