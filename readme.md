# NodeJS Hexagonal Architecture Example (work in progress)

## About This App

This is a project to show an example of hexagonal architecture. Aiming for strict separation between infrastructure and business logic
In this app, I build hotel booking api.

### Technologies

- Serverless Framework
- AWS Lambda
- AWS DynamoDB

### How to Run

- `yarn install`
- `yarn sls dynamodb install` (Java Runtime Engine (JRE) version 6.x is required) https://www.npmjs.com/package/serverless-dynamodb-local
- `yarn dev` to run local server. this also dynamodb local

### Use Cases

- find information of hotel H
- (find information of hotels in Amsterdam) // To keep this project simple, I don't implement this one. But it's possible with GSI

---

- (find information of room R of hotel H)
- (find information of all rooms of hotel H)

---

- (find availabilities of rooms of hotel H on the day of D)
- (find availabilities of rooms of hotel H between day D and D2)

---

- book hotel H on the day of D
- cancel booking of user U
- see all bookings of user U

---

### Primary Key Design

| Item    | Partition Key           | Sort Key                          |
| ------- | ----------------------- | --------------------------------- |
| hotel   | hotel_1 (hotelId)       | hotel                             |
| room    | rooms_hotel_1 (hotelId) | room_1 (roomId)                   |
| booking | bk_hotel_1 (hotelId)    | 2019-12-12_room_1 (date + roomId) |
| user    | user_1 (userId)         | user                              |

#### query patterns

- find information of hotel 1 -> PK=hotel_1 SK=hotel

---

- find information of room 101 of hotel 1 -> PK=rooms_hotel_1, SK=room_101
- find information of all rooms of hotel 1 -> PK=rooms_hotel_1

---

- find all bookings of hotel 1 on Jan 1 2019 -> PK=bk_hotel_1, SK=2019-01-01
- find all bookings of hotel 1 between day 2019-01-01 and 2019-01-30 -> PK=bk_hotel_1, SK between 2019-01-01 and 2019-01-30

---

- see information of booking B -> PK=bk_hotel_1 SK=2019-12-12_room1
- see all bookings of user 1 -> GSI
