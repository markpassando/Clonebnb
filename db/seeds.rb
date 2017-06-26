# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
user1 = User.create({ username: "RonBurgundy", password: "123456",
  avatar: File.open('app/assets/images/users/ron.jpg'),
})
user2 = User.create({ username: "BrianFantana", password: "123456"})
user3 = User.create({ username: "BrickTamland", password: "123456"})
user4 = User.create({ username: "ChampKind", password: "123456"})
user5 = User.create({ username: "VeronicaCorningstone", password: "123456"})
user6 = User.create({ username: "MathewMurdock", password: "123456",
  avatar: File.open('app/assets/images/users/matthew-murdock.jpg'),
})
user7 = User.create({ username: "PeterParker", password: "123456"})
user8 = User.create({ username: "BruceWayne", password: "123456"})
user9 = User.create({ username: "JessicaJones", password: "123456"})
user10 = User.create({ username: "AceVentura", password: "123456"})
user11 = User.create({ username: "CharlesXavier", password: "123456",
  avatar: File.open('app/assets/images/users/prof-x.jpg'),
})
user12 = User.create({ username: "AuntMay", password: "123456",
  avatar: File.open('app/assets/images/users/aunt-may.png'),
})
user13 = User.create({ username: "TonyStark", password: "123456",
  avatar: File.open('app/assets/images/users/tony-stark.png'),
})
user14 = User.create({ username: "WilsonFisk", password: "123456",
  avatar: File.open('app/assets/images/users/fisk.jpg'),
})
user15 = User.create({ username: "DrStephenStrange", password: "123456",
  avatar: File.open('app/assets/images/users/dr-strange.jpg'),
})
user16 = User.create({ username: "JessicaJones", password: "123456",
  avatar: File.open('app/assets/images/users/jessica-jones.jpg'),
})

user17 = User.create({ username: "LukeCage", password: "123456",
  avatar: File.open('app/assets/images/users/luke-cage.jpg'),
})

user18 = User.create({ username: "SusanStorm", password: "123456",
  avatar: File.open('app/assets/images/users/susan-storm.jpg'),
})

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
  description: "The new space features hardwood floors and brick walls for a modern technology space with an aura for learning. App Academy is a twelve-week intensive computer programming school founded by Ned Ruggeri and Kush Patel.",
  rules: "Wipe down your stations, no food or cups should be left in the sink. Date the food you store in the fridge.",
  prop_type: "Apartment",
  room_type: "Entire Home",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: false,
  pets: false,
  fireplace: false,
  bathtub: false,
  games: false
})


# room2 = Room.create({
#   host_id: user2.id,
#   title: "Modern Minimal Central Chelsea Apt",
#   address: "750 6th Ave, New York, NY 10010",
#   lat: 40.743719,
#   lng: -73.991801,
#   price: 230,
#   num_guests: 5,
#   bedrooms: 2,
#   beds: 2,
#   bathrooms: 1,
#   description: "Cozy apartment in a private house, located above Starbucks. Includes a living room/kitchenette, 2 bedrooms & bathroom. 15 minute walk to the world-famous Staten Island Ferry, which connects you to the rest of NYC.",
#   rules: "No pets",
#   prop_type: "Apartment",
#   room_type: "Entire Home",
#   wifi: true,
#   kitchen: true,
#   ac: true,
#   tv: true
# })

room3 = Room.create({
  host_id: user6.id,
  main_pic: File.open('app/assets/images/rooms/daredevil-apt.png'),
  title: "Hell's Kitchen Loft with Roof Access",
  address: "480 W 42nd St, New York, NY 10036",
  lat: 40.759228,
  lng: -73.995221,
  price: 150,
  num_guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "Very spacious loft located in Hell's Kitchen. Large windows allow for great sunlight. There is access to the roof. Hell's Kitchen, also known as Clinton, is a neighborhood on the West Side of Midtown Manhattan in New York City. It is traditionally considered to be bordered by 34th Street to the south, 59th Street to the north, Eighth Avenue to the east, and the Hudson River to the west. The area provides transport, medical, and warehouse-infrastructure support to Midtown's business district.",
  rules: "Noise must be kept to a minimum",
  prop_type: "Apartment",
  room_type: "Entire Home",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: false,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: false
})


room4 = Room.create({
  host_id: user11.id,
  main_pic: File.open('app/assets/images/rooms/x-men-mansion.jpg'),
  title: "Xavier's School For Gifted Youngsters",
  address: "1407 Graymalkin Lane, Salem Center",
  lat: 41.336532,
  lng: -73.597711,
  price: 30,
  num_guests: 1,
  bedrooms: 100,
  beds: 1,
  bathrooms: 30,
  description: "It is the base of operations and training site of the X-Men and the location of a school for mutant teenagers, and sometimes older aged mutants, the Xavier Institute for Higher Learning, formerly Xavier's School for Gifted Youngsters. The X-Mansion is also the worldwide headquarters of the X-Corporation.",
  rules: "No rules",
  prop_type: "House",
  room_type: "Private Room",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room5 = Room.create({
  host_id: user12.id,
  main_pic: File.open('app/assets/images/rooms/aunt-mays.jpg'),
  title: "Aunt May's House",
  address: "20 Ingram St Forest Hills, NY 11375",
  lat: 40.712950,
  lng: -73.843212,
  price: 80,
  num_guests: 1,
  bedrooms: 3,
  beds: 1,
  bathrooms: 2,
  description: "The Parker residence located in Forest Hills, Queens. Forest Hills has a great tradition of tennis, with Forest Hills Stadium having hosted the U.S. Open until 1978 and the West Side Tennis Club offering pristine grass courts for its members. Bustling Austin Street bisects Forest Hills and boasts lots of restaurants and chain stores. Forest Hills is bordered by Flushing Meadows–Corona Park and Forest Park.",
  rules: "Bedtime 10pm",
  prop_type: "House",
  room_type: "Private Room",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

room6 = Room.create({
  host_id: user13.id,
  title: "Stark Tower",
  main_pic: File.open('app/assets/images/rooms/stark-tower.jpg'),
  address: "200 Park Ave, New York, NY 10166",
  lat: 40.753434,
  lng: -73.976689,
  price: 3000,
  num_guests: 30,
  bedrooms: 10,
  beds: 10,
  bathrooms: 14,
  description: "Stark Tower (Avengers Tower) is a 93-story skyscraper with the Main Tower flanked by a 35-story South Building and 55-story North Building. Stark Tower serves as the headquarters for Stark Industries and houses the primary penthouse condominium residence of Tony Stark.",
  rules: "None",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: true,
  bathtub: true,
  games: true
})

room7 = Room.create({
  host_id: user14.id,
  main_pic: File.open('app/assets/images/rooms/fisk-tower.png'),
  title: "Fisk Towers",
  address: "439 West 38th Street, New York, NY 10018",
  lat: 40.756446,
  lng: -73.995747,
  price: 500,
  num_guests: 10,
  bedrooms: 5,
  beds: 5,
  bathrooms: 3,
  description: "The Fisk Industries towers is a front for the Kingpin (Wilson Fisk)'s public ventures as well as a base of operations for his criminal activities. It is located at 439 West 38th Street (on the corner of West 38th Street and 5th Avenue), just north of the Empire State Building and a few blocks south east of the Bank of America tower. Despite it's inherently illegal activities and being damaged or destroyed numerous times in superhuman battles, the Fisk Towers put up a convincing ploy for Wilson Fisk to appear as any other legitimate business within Manhattan's Financial District while secretly using it for his crimes as the Kingpin.",
  rules: "None",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: true,
  bathtub: true,
  games: false
})

room8 = Room.create({
  host_id: user16.id,
  main_pic: File.open('app/assets/images/rooms/jessica-jones.png'),
  title: "Jessica Jones' Apartment/Office",
  address: "485 W 46th St, New York, NY 10036",
  lat: 40.762134,
  lng: -73.993472,
  price: 90,
  num_guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "Jessica Jones' Apartment Building is a building located in the Hell's Kitchen neighborhood of New York City, that houses the office of the Alias Investigations private investigation agency.",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: false,
  tv: false,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room9 = Room.create({
  host_id: user17.id,
  main_pic: File.open('app/assets/images/rooms/luke-cage.jpg'),
  title: "Genghis Connie’s and Luke Cage’s Apartment",
  address: "Broadway & W 171st St, New York, NY 10032",
  lat: 40.843246,
  lng: -73.939189,
  price: 80,
  num_guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "If you were looking for the location of Genghis Connie’s in Harlem – you would have a hard time. That’s because the restaurant is fictional and this block is actually located in Washington Heights, at the corner of 171st Street and Broadway. There, you’ll find the confluence of Citibank, Bank of America, and Rite Aid that you see in the reflections at Genghis Connie’s. The actual restaurant is La Dinastia Restaurant, serving Latin Chinese cuisine restaurantIn the show, Luke Cage’s apartment is located above the Chinese restaurant, which he rents from Connie (Jade Wu).",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: false,
  tv: false,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room10 = Room.create({
  host_id: user18.id,
  main_pic: File.open('app/assets/images/rooms/baxter-building.png'),
  title: "Baxter Building (Fantastic Four HQ)",
  address: "42nd Street & Madison Avenue, New York, NY 10017",
  lat: 40.752803,
  lng: -73.979259,
  price: 4444,
  num_guests: 4,
  bedrooms: 4,
  beds: 4,
  bathrooms: 4,
  description: "The Baxter Building is a 35-story building located at 42nd Street and Madison Avenue, Manhattan, New York City in the United States of America just a few blocks from the United Nations Headquarters. It has been home to many individuals and organizations. The most famous being the Fantastic Four.",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: false,
  tv: false,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: false
})

room11 = Room.create({
  host_id: user15.id,
  main_pic: File.open('app/assets/images/rooms/dr-strange.jpg'),
  title: "Sanctum Sanctorum",
  address: "177A Bleecker Street, New York City, NY 10012-1406",
  lat: 40.729076,
  lng: -74.000653,
  price: 200,
  num_guests: 8,
  bedrooms: 4,
  beds: 4,
  bathrooms: 3,
  description: "The mansion of Doctor Stephen Strange's is located at 177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village. Also known as the Sanctum Sanctorum, the townhouse has served as the personal residence of Doctor Strange and former as the headquarters of the Defenders and the New Avengers.",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: false,
  kitchen: true,
  ac: true,
  tv: false,
  pets: false,
  fireplace: true,
  bathtub: true,
  games: false
})
