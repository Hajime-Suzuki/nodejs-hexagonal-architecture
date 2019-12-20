import { IBookRoomUseCaseDeps, BookRoomUseCasePayload } from './port'

export const bookRoomUseCase = (deps: IBookRoomUseCaseDeps) => async (
  payload: BookRoomUseCasePayload,
) => {
  // find avail on the day
  // create booking
  // update avail
}
