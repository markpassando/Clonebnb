# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Rooms

- `GET /api/rooms`
  - `Rooms index/search`
  - Possible filters, will accept query params `location, checkIn, checkOut, guests`
- `POST /api/rooms`
- `GET /api/rooms/:id`
- `PATCH /api/rooms/:id`
- `DELETE /api/rooms/:id`
- `GET /api/rooms/:id/reviews`
- `Get /api/rooms/trips`

### Reviews

- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

### Trips

- `GET /api/trips`
- `POST /api/trips`
- `GET /api/trips/:id`
- `DELETE /api/trips/:id`
