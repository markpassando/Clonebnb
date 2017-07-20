# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
user1 = User.create!({ username: "RonBurgundy", password: "123456",
  avatar: File.open('app/assets/images/users/ron.jpg'),
})
user2 = User.create!({ username: "BrianFantana", password: "123456",
  avatar: File.open('app/assets/images/users/brian-fantana.jpg'),
})
user3 = User.create!({ username: "BrickTamland", password: "123456"})
user4 = User.create!({ username: "ChampKind", password: "123456"})
user5 = User.create!({ username: "VeronicaCorningstone", password: "123456"})
user6 = User.create!({ username: "MathewMurdock", password: "123456",
  avatar: File.open('app/assets/images/users/matthew-murdock.jpg'),
})
user7 = User.create!({ username: "PeterParker", password: "123456"})
user8 = User.create!({ username: "BruceWayne", password: "123456",
  avatar: File.open('app/assets/images/users/bruce-wayne.jpg'),
})
user10 = User.create!({ username: "AceVentura", password: "123456"})
user11 = User.create!({ username: "CharlesXavier", password: "123456",
  avatar: File.open('app/assets/images/users/prof-x.jpg'),
})
user12 = User.create!({ username: "AuntMay", password: "123456",
  avatar: File.open('app/assets/images/users/aunt-may.png'),
})
user13 = User.create!({ username: "TonyStark", password: "123456",
  avatar: File.open('app/assets/images/users/tony-stark.png'),
})
user14 = User.create!({ username: "WilsonFisk", password: "123456",
  avatar: File.open('app/assets/images/users/fisk.jpg'),
})
user15 = User.create!({ username: "DrStephenStrange", password: "123456",
  avatar: File.open('app/assets/images/users/dr-strange.jpg'),
})
user16 = User.create!({ username: "JessicaJones", password: "123456",
  avatar: File.open('app/assets/images/users/jessica-jones.jpg'),
})

user17 = User.create!({ username: "LukeCage", password: "123456",
  avatar: File.open('app/assets/images/users/luke-cage.jpg'),
})

user18 = User.create!({ username: "SusanStorm", password: "123456",
  avatar: File.open('app/assets/images/users/susan-storm.jpg'),
})

user19 = User.create!({ username: "BiggieSmalls", password: "123456",
  avatar: File.open('app/assets/images/users/biggie.jpg'),
})

user20 = User.create!({ username: "ElliotAlderson", password: "123456",
  avatar: File.open('app/assets/images/users/elliot.jpg'),
})

user21 = User.create!({ username: "NasirJones", password: "123456",
  avatar: File.open('app/assets/images/users/nas.jpg'),
})

user22 = User.create!({ username: "FlightoftheConchords", password: "123456",
  avatar: File.open('app/assets/images/users/flight-of-the-conchords.jpg'),
})

user23 = User.create!({ username: "BernieSanders", password: "123456",
  avatar: File.open('app/assets/images/users/bernie.jpg'),
})

user24 = User.create!({ username: "JerrySienfeld", password: "123456",
  avatar: File.open('app/assets/images/users/jerry-seinfeld.jpg'),
})

user25 = User.create!({ username: "CurtisJackson", password: "123456",
  avatar: File.open('app/assets/images/users/50-cent.jpg'),
})

user27 = User.create!({ username: "Ghostbusters", password: "123456",
  avatar: File.open('app/assets/images/users/ghostbusters.jpg'),
})

user28 = User.create!({ username: "RachelGreen", password: "123456",
  avatar: File.open('app/assets/images/users/rachel.jpg'),
})

user29 = User.create!({ username: "PatrickBateman", password: "123456",
  avatar: File.open('app/assets/images/users/patrick-bateman.jpg'),
})

user30 = User.create!({ username: "SonnyKoufax", password: "123456",
  avatar: File.open('app/assets/images/users/sonny-koufax.jpg'),
})

user31 = User.create!({ username: "JeremyLin", password: "123456",
  avatar: File.open('app/assets/images/users/jeremy-lin.jpg'),
})

user32 = User.create!({ username: "KristapsPorzingis", password: "123456",
  avatar: File.open('app/assets/images/users/kristaps-porzingis.jpg'),
})

Room.destroy_all
room1 = Room.create!({
  host_id: user1.id,
  title: "App Academy NYC",
  address: "159 W 25th St, New York, NY 10001",
  lat: 40.745299,
  lng: -73.993990,
  price: 1000,
  num_guests: 59,
  bedrooms: 8,
  bathrooms: 3,
  beds: 59,
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


# room2 = Room.create!({
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

room3 = Room.create!({
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


room4 = Room.create!({
  host_id: user11.id,
  main_pic: File.open('app/assets/images/rooms/x-men-mansion.jpg'),
  title: "Xavier's School For Gifted Youngsters",
  address: "1407 Graymalkin Lane, Salem Center",
  lat: 41.336532,
  lng: -73.597711,
  price: 30,
  num_guests: 10,
  bedrooms: 30,
  beds: 50,
  bathrooms: 10,
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

room5 = Room.create!({
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

room6 = Room.create!({
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

room7 = Room.create!({
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

room8 = Room.create!({
  host_id: user16.id,
  title: "Jessica Jones' Apartment/Office",
  main_pic: File.open('app/assets/images/rooms/jessica-jones.png'),
  address: "485 W 46th St, New York, NY 10036",
  lat: 40.762134,
  lng: -73.993472,
  price: 90,
  num_guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "Jessica Jones' Apartment Building is a building located in the Hell's Kitchen neighborhood of New York City, that houses the office of the Alias Investigations private investigation agency.",
  rules: "None",
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

room9 = Room.create!({
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
  rules: "No rules",
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

room10 = Room.create!({
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
  rules: "No rules",
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

room11 = Room.create!({
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
  rules: "No rules",
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

room12 = Room.create!({
  host_id: user19.id,
  main_pic: File.open('app/assets/images/rooms/biggie.jpg'),
  title: "Notorious B.I.G.'s Apartment",
  address: "226 Saint James Street #3L, Brooklyn, NY 11238",
  lat: 40.683554,
  lng: -73.964053,
  price: 94,
  num_guests: 7,
  bedrooms: 3,
  beds: 4,
  bathrooms: 2,
  description: "The Brooklyn apartment famed rapper Notorious B.I.G. once called his 'one-room shack' is on the market for a cool $725,000. The steep asking price for a crib — actually a three-bedroom apartment renovated with a modern kitchen and restored historic details — is a testament to the ongoing gentrification of once-hardscrabble central Brooklyn. 'I didn't factor his celebrity into the price, Judith Siegel Lief, the listing agent, told the Daily News. I ran comps in the neighborhood based on the size of the apartment and the light.'",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: true
})

room13 = Room.create!({
  host_id: user20.id,
  main_pic: File.open('app/assets/images/rooms/elliot.jpg'),
  title: "Mr.Robot's Apartment",
  address: "217 E Broadway, New York, NY 10002",
  lat: 40.714059,
  lng: -73.987370,
  price: 50,
  num_guests: 1,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "Mr. Robot is one of the most—if not the most—visually stunning shows currently on TV. Creator/director Sam Esmail's unorthodox camera angles and stark wide shots set an unsettling mood in line with the mental state of the show's main character, a disturbed, drug-addled hacker named Elliot Alderson (Rami Malek).",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: false,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room14 = Room.create!({
  host_id: user20.id,
  main_pic: File.open('app/assets/images/rooms/arcade.jpg'),
  title: "fsociety Headquarters",
  address: "1215 Bowery St, Brooklyn, NY 11224",
  lat: 40.575114,
  lng: -73.980178,
  price: 20,
  num_guests: 10,
  bedrooms: 1,
  beds: 10,
  bathrooms: 2,
  description: "The cursed arcade where fsociety sets up its secret Coney Island headquarters is abandoned and dilapidated in the show. The real Eldorado Arcade, however, is very much up and running—no hacked servers to be found.",
  rules: "No rules",
  prop_type: "Commercial",
  room_type: "Entire House",
  wifi: true,
  kitchen: false,
  ac: true,
  tv: true,
  pets: false,
  fireplace: false,
  bathtub: false,
  games: true
})

room15 = Room.create!({
  host_id: user20.id,
  main_pic: File.open('app/assets/images/rooms/ecorp.jpg'),
  title: "Evil Corp Building",
  address: "135 East 57th Street, New York, NY 10022",
  lat: 40.761409,
  lng: -73.969223,
  price: 250,
  num_guests: 15,
  bedrooms: 10,
  beds: 10,
  bathrooms: 5,
  description: "This 31-story skyscraper serves as the exterior for E Corp (a.k.a. Evil Corp), the dastardly conglomerate at the center of Mr. Robot. The imposing circular structure at the entrance adds to the all-powerful conspiracy vibes.",
  rules: "No rules",
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

room16 = Room.create!({
  host_id: user21.id,
  main_pic: File.open('app/assets/images/rooms/nas.jpg'),
  title: "Nas' Apartment",
  address: "21st Street and 40th Avenue, Queensbridge, NY 11101",
  lat: 40.755189,
  lng: -73.941731,
  price: 94,
  num_guests: 3,
  bedrooms: 2,
  beds: 3,
  bathrooms: 1,
  description: "Queensbridge Houses is the largest public housing development in North America. Owned by the New York City Housing Authority, the 3,142-unit complex is located in Community Board 1 and accommodates approximately 6,907 people within two separate complexes (North and South Houses), each accommodating about 3,450 residents. It is located in Long Island City in Queens and opened in 1939.",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

room17 = Room.create!({
  host_id: user22.id,
  main_pic: File.open('app/assets/images/rooms/flight-of-the-conchords.jpg'),
  title: "Flight of the Conchords' Apartment",
  address: "28 Henry St, New York, NY 10002",
  lat: 40.712650,
  lng: -73.996437,
  price: 60,
  num_guests: 3,
  bedrooms: 1,
  beds: 2,
  bathrooms: 1,
  description: "Flight of the Conchords is a New Zealand-based comedy duo composed of Bret McKenzie and Jemaine Clement. The duo's comedy and music became the basis of a BBC radio series and then an American television series that aired for two seasons on HBO. They used to refer to themselves as 'New Zealand's fourth most popular guitar-based digi-bongo acapella-rap-funk-comedy folk duo', but now speak of themselves as 'the almost award-winning fourth-most-popular folk duo in New Zealand.'",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: false,
  pets: false,
  fireplace: false,
  bathtub: false,
  games: false
})

room18 = Room.create!({
  host_id: user8.id,
  main_pic: File.open('app/assets/images/rooms/wayne.jpg'),
  title: "Wayne Enterprises",
  address: "725 5th Ave, New York, NY 10022",
  lat: 40.762434,
  lng: -73.973802,
  price: 1939,
  num_guests: 20,
  bedrooms: 8,
  beds: 14,
  bathrooms: 4,
  description: "Wayne Enterprises, Inc., also known as WayneCorp, is a fictional company appearing in American comic books published by DC Comics, commonly in association with the superhero Batman. The American diversified multinational conglomerate is owned and chaired by Bruce Wayne, who is also Batman. Wayne Enterprises is a green company based out of Gotham City and headquartered in Wayne Tower.",
  rules: "No rules",
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

room19 = Room.create!({
  host_id: user24.id,
  main_pic: File.open('app/assets/images/rooms/jerry.jpg'),
  title: "Jerry Seinfeld's Apartment",
  address: "129 West 81st Street, Apartment 5A, New York, NY 10024",
  lat: 40.783830,
  lng: -73.975368,
  price: 80,
  num_guests: 4,
  bedrooms: 2,
  beds: 2,
  bathrooms: 1,
  description: "Jerry's apartment (129 West 81st Street, Apartment 5A) is where Jerry Seinfeld lives and is located in New York City. His apartment is usually a meeting ground for him and his friends George and Elaine. His next door neighbor, Kramer, also visits whenever he feels like it. This is one of the two main hubs, the other being Monk's Cafe. Early episodes show apartment 411 as well.",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: false,
  kitchen: true,
  ac: true,
  tv: true,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room20 = Room.create!({
  host_id: user25.id,
  main_pic: File.open('app/assets/images/rooms/50-cent.jpg'),
  title: "50 Cent's House",
  address: "140-52 161 St, Jamaica, NY 11434",
  lat: 40.668710,
  lng: -73.774673,
  price: 50,
  num_guests: 5,
  bedrooms: 3,
  beds: 4,
  bathrooms: 2,
  description: "South Jamaica (also commonly known as 'The Southside') is a residential neighborhood in the borough of Queens in New York City, located south of downtown Jamaica. It is part of Queens Community Board 12. Although a proper border has not been established, the neighborhood is an overall subset of the greater Jamaica area that faces the Long Island Rail Road Main Line tracks, Jamaica Avenue or Liberty Avenue to the north; the Van Wyck Expressway on the west; and Merrick Boulevard toward the east, adjoining the neighboring community of St. Albans. Other primary thoroughfares of South Jamaica include Baisley, Foch, Linden, Guy R. Brewer, Sutphin, and Rockaway Boulevards.",
  rules: "No rules",
  prop_type: "House",
  room_type: "Entire House",
  wifi: false,
  kitchen: true,
  ac: true,
  tv: true,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room21 = Room.create!({
  host_id: user23.id,
  main_pic: File.open('app/assets/images/rooms/bernie.jpg'),
  title: "Bernie Sander's House",
  address: "1525 E 26th St, Midwood, Brooklyn, NY 11229",
  lat: 40.613800,
  lng: -73.948293,
  price: 75,
  num_guests: 5,
  bedrooms: 3,
  beds: 3,
  bathrooms: 1,
  description: "Sanders grew up in a rent-controlled apartment building on East 26th Street near Kings Highway in the 1940s and '50s, the son of Jewish immigrants from Poland. Talking to CBS's Scott Pelley, he recalled his mother yearning for a single-family home like the ones down the block. 'Not having enough money was a cause of constant tension,' he said. 'And when you are five or six years of age and your parents are yelling at each other, it's, you know—you think back on it now, you know—it's traumatic and it's hard.'",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: false,
  kitchen: true,
  ac: true,
  tv: true,
  pets: false,
  fireplace: false,
  bathtub: true,
  games: false
})

room22 = Room.create!({
  host_id: user27.id,
  main_pic: File.open('app/assets/images/rooms/ghostbusters.jpg'),
  title: "Ghostbusters Firehouse",
  address: "14 N Moore St, New York, NY 10013",
  lat: 40.719566,
  lng: -74.006617,
  price: 84,
  num_guests: 5,
  bedrooms: 3,
  beds: 3,
  bathrooms: 1,
  description: "Ghostbusters is a 1984 American supernatural comedy film directed and produced by Ivan Reitman and written by Dan Aykroyd and Harold Ramis. The film stars Bill Murray, Aykroyd and Ramis as three eccentric parapsychologists who start a ghost-catching business and Ernie Hudson as the Ghostbusters' first recruit in New York City. Sigourney Weaver and Rick Moranis co-star as a client and her neighbor. Aykroyd conceived the film as a project for himself and fellow Saturday Night Live alumnus John Belushi, with the 'Ghostmashers' travelling through time and space in the future with magic wands. He and Ramis dramatically rewrote the script following Belushi's death and after Reitman deemed Aykroyd's initial vision financially impractical. Ghostbusters was released in the United States on June 8, 1984. It received a positive response from critics and audiences and grossed $242 million in the United States and more than $295 million worldwide. It was nominated for two Oscars at the 57th Academy Awards for Best Visual Effects and Best Original Song (for the eponymous theme song), but lost to Indiana Jones and the Temple of Doom and The Woman in Red respectively.",
  rules: "No ghosts",
  prop_type: "House",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: false
})

room23 = Room.create!({
  host_id: user28.id,
  main_pic: File.open('app/assets/images/rooms/friends.jpg'),
  title: "Friends' Apartment",
  address: "90 Bedford St, New York, NY 10014",
  lat: 40.732399,
  lng: -74.005325,
  price: 94,
  num_guests: 4,
  bedrooms: 2,
  beds: 2,
  bathrooms: 1,
  description: "Monica and Rachel get more light through the Western windows, but it’s basically confined to their bedrooms. That said, the double wide northern window and what looks like a second means of egress, rather than an awesome terrace, would definitely give the home a more open feeling than many comparable pre-wars of this size and type. Joey and Chandler do, however, have the bigger bathroom. That their windows are less substantial and the foyer doubles as a kitchen is not ideal. The boys also look like they’re compromising on space slightly compared to the girls.",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

room23 = Room.create!({
  host_id: user29.id,
  main_pic: File.open('app/assets/images/rooms/psycho.jpg'),
  title: "American Psycho Apartment",
  address: "W. 81st Street, Upper West Side, NY 10024",
  lat: 40.784480,
  lng: -73.977367,
  price: 200,
  num_guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: "The American Felt Building at 114 East 13th Street once supplied the hammer and brushing felt to Steinway pianos. Converted from a loft building to residences in the mid 1980s, the full service building set the precursor to much of what is considered desirable in downtown New York real estate today: high ceilings, large windows, having a raw loft character, many apartments having terraces.",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

room23 = Room.create!({
  host_id: user30.id,
  main_pic: File.open('app/assets/images/rooms/big-daddy.png'),
  title: "Big Daddy Apartment",
  address: "16 Mercer St, New York, NY 10013",
  lat: 40.720504,
  lng: -74.002046,
  price: 99,
  num_guests: 6,
  bedrooms: 3,
  beds: 4,
  bathrooms: 2,
  description: "16 Mercer was originally built in 1863 to shelter Union soldiers returning from the Civil War. Today, it’s a boutique rental building with mint-finished interiors and all the authentic loft features one expects in SoHo—exposed beams, large windows overlooking cobblestone streets, high ceilings (12 ft). The prices, however, are affordable by prime downtown New York standards for two reasons: 1) the building has no luxury amenities (no doorman, gym etc.) and 2) the location is closer to Canal Street than ideally preferred. These two features aside, you have some wonderful properties that include a four bedroom on the fourth floor which was recently rented out for just under $24,000 per month (approximately $80 per ft).",
  rules: "No rules",
  prop_type: "Apartment",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

room24 = Room.create!({
  host_id: user31.id,
  main_pic: File.open('app/assets/images/rooms/barclays-center.jpg'),
  title: "Barclays Center",
  address: "620 Atlantic Ave, Brooklyn, NY 11217",
  lat: 40.682501,
  lng: -73.975040,
  price: 40,
  num_guests: 20,
  bedrooms: 10,
  beds: 20,
  bathrooms: 5,
  description: "Barclays Center is a multi-purpose indoor arena in the New York City borough of Brooklyn. The arena is part of a $4.9 billion future business and residential complex now known as Pacific Park. The site is located at Atlantic Avenue, adjacent to the renamed Atlantic Avenue–Barclays Center subway station on the 2 3 4 5 B Q D N R W routes, as well as directly above the LIRR's Atlantic Terminal. The arena is currently home to the Brooklyn Nets of the National Basketball Association and the New York Islanders of the National Hockey League. The arena also hosts concerts, conventions and other sporting and entertainment events. It competes with other facilities in the New York metropolitan area, including Madison Square Garden in Manhattan and Prudential Center in Newark.",
  rules: "No rules",
  prop_type: "Commercial",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

room25 = Room.create!({
  host_id: user32.id,
  main_pic: File.open('app/assets/images/rooms/madison-square-garden.jpg'),
  title: "Madison Square Garden",
  address: "4 Pennsylvania Plaza, New York, NY 10001",
  lat: 40.750505,
  lng: -73.993443,
  price: 1879,
  num_guests: 25,
  bedrooms: 15,
  beds: 25,
  bathrooms: 5,
  description: "Madison Square Garden, often called 'MSG' or simply 'The Garden', is a multi-purpose indoor arena in the New York City borough of Manhattan. Located in Midtown Manhattan between 7th and 8th Avenues from 31st to 33rd Streets, it is situated atop Pennsylvania Station. It is the fourth venue to bear the name 'Madison Square Garden', the first two (1879 and 1890) of which were located on Madison Square, on East 26th Street and Madison Avenue, with the third Madison Square Garden further uptown at Eighth Avenue and 50th Street. The Garden is used for professional basketball and ice hockey, as well as boxing, concerts, ice shows, circuses, professional wrestling and other forms of sports and entertainment. It is close to other midtown Manhattan landmarks, including the Empire State Building, Koreatown, and Macy's at Herald Square. It is home to the New York Rangers of the National Hockey League (NHL) and the New York Knicks of the National Basketball Association (NBA).",
  rules: "No rules",
  prop_type: "Commercial",
  room_type: "Entire House",
  wifi: true,
  kitchen: true,
  ac: true,
  tv: true,
  pets: true,
  fireplace: false,
  bathtub: true,
  games: true
})

# friends
# 30 Rock
# barack obama apartment

Review.destroy_all
#app academy
dd_review1 = Review.create!({
  user_id: user2.id,
  room_id: room1.id,
  rating: 5,
  body: "They’ve done studies, you know. 60 percent of the time, there's bugs in production code every time."
})

dd_review2 = Review.create!({
  user_id: user18.id,
  room_id: room1.id,
  rating: 5,
  body: "Ron's place was perfect, precisely as described and in the greatest location. Comfy, quiet, cozy and clean. Nothing better."
})

#DareDevil
dd_review1 = Review.create!({
  user_id: user1.id,
  room_id: room3.id,
  rating: 5,
  body: "Super duper, gang! Super duper! That's nice! Way to go! Neat-o, gang."
})

dd_review2 = Review.create!({
  user_id: user14.id,
  room_id: room3.id,
  rating: 1,
  body: "This city doesn't deserve a better tomorrow! It deserves to drown in its filth! It deserves people like my father! People like you!"
})

dd_review3 = Review.create!({
  user_id: user15.id,
  room_id: room3.id,
  rating: 4,
  body: "This place is exactly as described, probably better! Matt is an amazing host who made us feel right at home. We had plenty of room to sprawl out."
})

dd_review3 = Review.create!({
  user_id: user13.id,
  room_id: room3.id,
  rating: 4,
  body: "This is an amazing little place, perfect for one or a couple visiting the city. The apartment is in the back of the building meaning you have a lot of privacy and also it is quiet. Perfect to sleep late. The apartment has a lot of natural light. I was very happy at this place."
})



#X men
x_review1 = Review.create!({
  user_id: user18.id,
  room_id: room4.id,
  rating: 5,
  body: "Cozy and comfortable space, fullly prepared with essentials and family-friendly envirment. I'd recommend this place for sure! The host, Charles is really kind and warm."
})

#Aunt Mays

may_review1 = Review.create!({
  user_id: user13.id,
  room_id: room5.id,
  rating: 4,
  body: "So you’re this Spider-ling? Crime-fighting spider? Spider-Boy?"
})

may_review2 = Review.create!({
  user_id: user2.id,
  room_id: room5.id,
  rating: 3,
  body: "The house was very clean and the rooms as described in the profile. Susan was fantastic and was very helpful. Responded very quickly to my text, met her a couple of times, and eager to provide information when needed."
})

#Stark Tower
st_review1 = Review.create!({
  user_id: user1.id,
  room_id: room6.id,
  rating: 5,
  body: "Super duper, gang! Super duper! That's nice! Way to go! Neat-o, gang."
})

st_review2 = Review.create!({
  user_id: user18.id,
  room_id: room6.id,
  rating: 5,
  body: "great location, nice and quiet apartment, great host."
})

st_review3 = Review.create!({
  user_id: user6.id,
  room_id: room6.id,
  rating: 5,
  body: "Great location in midtown, close to subway, and our host was quick with anything we needed or wanted. We would highly recommend this place to family and friends. We felt like we were locals because we had our own apartment...very cool."
})


#Fisk Tower
fisk_review1 = Review.create!({
  user_id: user1.id,
  room_id: room7.id,
  rating: 1,
  body: "I immediately regret this decision."
})

fisk_review2 = Review.create!({
  user_id: user18.id,
  room_id: room7.id,
  rating: 1,
  body: "Accommodation was great .... clean , comfortable and close to Manhatten would recommend and certainly come back again."
})

#Jessica Jones
jj_review1 = Review.create!({
  user_id: user17.id,
  room_id: room8.id,
  rating: 5,
  body: "Sweet Christmas!"
})

jj_review2 = Review.create!({
  user_id: user1.id,
  room_id: room8.id,
  rating: 1,
  body: "It’s terrible. She has beautiful eyes, and her hair smells like cinnamon!"
})

jj_review3 = Review.create!({
  user_id: user12.id,
  room_id: room8.id,
  rating: 2,
  body: "The place was a mess and the front door was broken. It is unsafe and I would never stay here again."
})

#Luke Cage
lc_review2 = Review.create!({
  user_id: user16.id,
  room_id: room9.id,
  rating: 5,
  body: 'A++'
})

#Baxter
bax_review1 = Review.create!({
  user_id: user1.id,
  room_id: room10.id,
  rating: 3,
  body: "The human torch was denied a bank loan. Baxter, is that you? Baxter! Bark twice if you’re in Milwaukee."
})

#Dr Strange
dr_review1 = Review.create!({
  user_id: user1.id,
  room_id: room11.id,
  rating: 2,
  body: "You know I don’t speak Spanish."
})

dr_review2 = Review.create!({
  user_id: user12.id,
  room_id: room11.id,
  rating: 4,
  body: "It was lovely."
})

dr_review3 = Review.create!({
  user_id: user13.id,
  room_id: room11.id,
  rating: 5,
  body: "This place was fantastic! It's in such a convenient neighborhood, literally everything you could need is within 3 blocks. The food on the street alone is amazing."
})

Trip.destroy_all
trip1 = Trip.create!({
  user_id: user1.id,
  room_id: room11.id,
  check_in: "2017-06-29T12:00:00-04:00",
  check_out: "2017-06-30T12:00:00-04:00",
  num_guests: 3
})

trip2 = Trip.create!({
  user_id: user1.id,
  room_id: room10.id,
  check_in: "2017-06-15T12:00:00-04:00",
  check_out: "2017-06-19T12:00:00-04:00",
  num_guests: 2
})

trip3 = Trip.create!({
  user_id: user1.id,
  room_id: room9.id,
  check_in: "2017-06-25T12:00:00-04:00",
  check_out: "2017-06-26T12:00:00-04:00",
  num_guests: 2
})

trip4 = Trip.create!({
  user_id: user1.id,
  room_id: room8.id,
  check_in: "2017-06-11T12:00:00-04:00",
  check_out: "2017-06-12T12:00:00-04:00",
  num_guests: 1
})

trip5 = Trip.create!({
  user_id: user1.id,
  room_id: room7.id,
  check_in: "2017-06-29T12:00:00-04:00",
  check_out: "2017-06-30T12:00:00-04:00",
  num_guests: 1
})
