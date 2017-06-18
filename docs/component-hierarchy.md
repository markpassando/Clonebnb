## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - SearchBar
 - HomesIndex
    - HomeItem

**SearchHomesContainer**
 - SearchHomeIndexContainer
    - FilterContainer
    - HomesIndex
        - HomeItem
- MapContainer

**HomeItemContainer**
 - HomeImageContainer
    - ImageSlider
- HomeDetailContainer
    - HomeDetail
        - HomeInfo
        - ReviewContainer
            - Review Index
            - Review Form
    - BookingContainer
        - BookingForm
        - Booking Info



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/s/:searchParams" | "SearchIndexContainer" |
| "/home/:homeId" | "HomeItemContainer" |
