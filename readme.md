# NodeJS Hexagonal Architecture Example

## About This App

This is a project to show an example of hexagonal architecture. Aiming for strict separation between infrastructure and business logic
In this app, I build hotel booking api.

### Technologies

- Serverless Framework
- AWS Lambda
- AWS DynamoDB

### Use Cases

- find information of hotel H
- (find information of hotels in Amsterdam) // For keep this app simple, I don't implement this one this time. But it's possible with GSI

---

- find information of room R of hotel H
- find information of all rooms of hotel H

---

- find availabilities of rooms of hotel H on the day of D.
- find availabilities of rooms of hotel H between day D and D2

---

- book hotel H on the day of D
- cancel booking of user U
- see all bookings of user U

---

### Primary Key Design

| Partition Key                 | Sort Key                          |
| ----------------------------- | --------------------------------- |
| hotel_1 (hotelId)             | hotel                             |
| rooms_hotel_1 (hotelId)       | room_1 (roomId)                   |
| aval_hotel_1 (availabilityId) | 2019-12-12_room_1 (date + roomId) |
| user_1 (userId)               | user                              |
| bk_user_1 (userId)            | 2019-12-10 (date)                 |

#### query pattern

- find information of hotel 1 -> PK=hotel_1 SK=hotel

---

- find information of room 101 of hotel 1 -> PK=rooms_hotel_1, SK=room_101
- find information of all rooms of hotel 1 -> PK=rooms_hotel_1

---

- find availabilities of rooms of hotel 1 on Jan 1 2019 -> PK=aval_1, SK=2019-01-01
- find availabilities of rooms of hotel 1 between day 2019-01-01 and 2019-01-30 -> PK=aval_1, SK between 2019-01-01 and 2019-01-30

---

- see all bookings of user 1 -> PK=bk_user_1
