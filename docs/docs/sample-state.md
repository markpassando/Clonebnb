```js
{
  currentUser: {
    id: 1,
    username: "Ron Burgundy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  rooms: {
    entities: {
      1: {
        id: 1,
        title: "Luxury Condo with Pool",
        price: "160",
        lng: "41.23123",
        lat: "51.324234234",
        room_type: "Entire home/apt",
        rating: 5,
        num_rating: 324
      },
      23: {
        id: 23,
        title: "Wayne Manor",
        description: "Only 10 miles outside of Gotham City.",
        address: "1007 Mountain Drive, Gotham",
        lng: "1.23123",
        lat: "1.324234234",
        rules: "No basement access!",
        host_id: 2,
        price: "1500",
        prop_type: "House",
        room_type: "Entire home/apt",
        num_guests: 35,
        bedrooms: 12,
        beds: 20,
        amenities: {
          wifi: true,
          gym: true,
          heating: true,
          tv: true,
          fireplace: true,
          etc...
        }
    },
    currentRoom: 23,
      reviews: ["1", "3", "4"]
    }
  },
  reviews: {
    "1": {
      id: 2,
      room_id: 23,
      reviewer_name: "Tony Stark",
      body: "Too dark and damp",
      rating: 4
    }
  },
  trips: {
    entities: {
      26: {
        id: 23,
        title: "Spiderman's Forest Hills Home",
        check_in: 06/15/2017,
        check_out: 06/18/2017,
        guests: 2
      }
    }
  }
}
```
