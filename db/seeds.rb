# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
user1 = User.create({ username: "RonBurgundy", password: "123456"})
user2 = User.create({ username: "BrianFantana", password: "123456"})
user3 = User.create({ username: "BrickTamland", password: "123456"})
user4 = User.create({ username: "ChampKind", password: "123456"})
user5 = User.create({ username: "VeronicaCorningstone", password: "123456"})
user6 = User.create({ username: "MathewMurdock", password: "123456"})
user7 = User.create({ username: "PeterParker", password: "123456"})
user8 = User.create({ username: "BruceWayne", password: "123456"})
user9 = User.create({ username: "JessicaJones", password: "123456"})
user10 = User.create({ username: "AceVentura", password: "123456"})
user11 = User.create({ username: "CharlesXavier", password: "123456"})

Room.destroy_all
room1 = Room.create({
  host_id: user1.id,
  title: "App Academy NYC",
  address: "159 W 25th St, New York, NY 10001",
  lat: 40.745299,
  lng: -73.993990,
  price: 1000,
  num_guests: 100,
  bedrooms: 4,
  bathrooms: 3,
  beds: 50,
  description: "The new space features hardwood floors and brick walls for a modern technology space with an aura for learning.",
  rules: "Wipe down your stations, no food or cups should be left in the sink. Date the food you store in the fridge.",
  prop_type: "Apartment",
  room_type: "Entire Home",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: false
})


room2 = Room.create({
  host_id: user2.id,
  title: "Modern Minimal Central Chelsea Apt",
  address: "750 6th Ave, New York, NY 10010",
  lat: 40.743719,
  lng: -73.991801,
  price: 230,
  num_guests: 5,
  bedrooms: 2,
  beds: 2,
  bathrooms: 1,
  description: "Cozy apartment in a private house, located above Starbucks. Includes a living room/kitchenette, 2 bedrooms & bathroom. 15 minute walk to the world-famous Staten Island Ferry, which connects you to the rest of NYC.",
  rules: "No pets",
  prop_type: "Apartment",
  room_type: "Entire Home",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true
})

room3 = Room.create({
  host_id: user6.id,
  title: "Hell's Kitchen Loft with Room Access",
  address: "480 W 42nd St, New York, NY 10036",
  lat: 40.759228,
  lng: -73.995221,
  price: 150,
  num_guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "Very spacious loft located in Hell's Kitchen. Large windows allow for great sunlight. There is access to the roof.",
  rules: "Noise must be kept to a minimum",
  prop_type: "Apartment",
  room_type: "Entire Home",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: false
})


room4 = Room.create({
  host_id: user11.id,
  title: "Xavier's School For Gifted Youngsters",
  address: "1407 Graymalkin Lane, Salem Center",
  lat: 41.336532,
  lng: -73.597711,
  price: 30,
  num_guests: 1,
  bedrooms: 100,
  beds: 1,
  bathrooms: 30,
  description: "The Xavier Institute for Mutant Education and Outreach",
  rules: "No rules",
  prop_type: "House",
  room_type: "Private Room",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true
})
