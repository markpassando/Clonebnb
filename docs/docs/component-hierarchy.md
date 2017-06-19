## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**NavContainer**
 - SearchBarContainer
 - NavLinks
  - LoginContainer
  
**HomeContainer**
 - Home
 - SearchBar
 - RoomIndex
    - RoomItem

**SearchRoomsContainer**
 - SearchRoomsIndexContainer
    - FilterContainer
    - RoomsIndex
        - RoomItem
- MapContainer

**RoomItemContainer**
 - RoomImageContainer
    - ImageSlider
- RoomDetailContainer
    - RoomDetail
        - RoomInfo
        - ReviewContainer
            - Review Index
            - Review Form
    - BookingContainer
        - BookingForm
        - Booking Info

**TripsContainer**
 - TripsContainer
    - TripsIndex
        - TripsItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/s/:searchParams" | "SearchIndexContainer" |
| "/rooms/:roomId" | "RoomItemContainer" |
| "/trips/:userId" | "TripsContainer" |
