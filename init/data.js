const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Penthouse with Ocean Views",
    description:
      "Luxury penthouse offering spectacular ocean views, complete with modern amenities and a private terrace.",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVudGhvdXNlJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Charming farmhouse set in the beautiful countryside, ideal for a peaceful and relaxing retreat.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeXNpZGUlMjBmb3JtJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Devon",
    country: "United Kingdom",
  },
  {
    title: "City Center Apartment",
    description:
      "Modern apartment located in the city center, perfect for business travelers and tourists.",
    image: "https://images.unsplash.com/photo-1528304349271-9f9a5a6dd0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eSUyMGNlbnRlciUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Tropical Island Villa",
    description:
      "Luxurious villa on a private tropical island, offering a perfect escape from the hustle and bustle.",
    image: "https://images.unsplash.com/photo-1582719478171-fffe4a0daef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXNsYW5kJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Medieval Castle Stay",
    description:
      "Live like royalty in this stunning medieval castle, complete with historical artifacts and modern comforts.",
    image: "https://images.unsplash.com/photo-1570129477708-917b738a2a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Desert Glamping Experience",
    description:
      "Luxury glamping in the desert with all the modern amenities, perfect for stargazing and outdoor adventures.",
    image: "https://images.unsplash.com/photo-1600492044263-217b4f2b4d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdsYW1waW5nJTIwZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Beach Bungalow",
    description:
      "Relax in this beach bungalow with direct access to the ocean, ideal for a romantic getaway.",
    image: "https://images.unsplash.com/photo-1573497019256-63e0722d8085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Urban Studio",
    description:
      "Stylish studio apartment in the heart of the city, perfect for solo travelers or couples.",
    image: "https://images.unsplash.com/photo-1585079547403-3f3c2195a46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZnQlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakeside Log Cabin",
    description:
      "Cozy log cabin by the lake, offering stunning views and a peaceful environment.",
    image: "https://images.unsplash.com/photo-1549648839-08ff71d3b4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvZyUyMGNhYmluJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Chic City Condo",
    description:
      "Modern condo located in the city's trendiest neighborhood, offering easy access to shops and restaurants.",
    image: "https://images.unsplash.com/photo-1550564985-0b35c5f0240d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxvZnQlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Paris",
    country: "France",
  },
  {
    title: "Beach House",
    description:
      "Beautiful beach house with panoramic ocean views, perfect for family vacations.",
    image: "https://images.unsplash.com/photo-1508749035163-3d58f86a48d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Gold Coast",
    country: "Australia",
  },
  {
    title: "Private Island Retreat",
    description:
      "Exclusive private island retreat offering complete privacy and luxury amenities.",
    image: "https://images.unsplash.com/photo-1529872554699-99cd3a16db11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGlzbGFuZCUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "City Loft with Skyline Views",
    description:
      "Contemporary loft apartment with stunning skyline views, perfect for urban living.",
    image: "https://images.unsplash.com/photo-1527022376731-15f8398c11dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxvZnQlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Eco-Friendly Cabin",
    description:
      "Sustainable eco-friendly cabin surrounded by nature, ideal for an eco-conscious retreat.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeXNpZGUlMjBmb3JtJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Blue Mountains",
    country: "Australia",
  },
  {
    title: "Modern Beachfront Apartment",
    description:
      "Stylish beachfront apartment with modern amenities and direct access to the beach.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Hilltop Villa",
    description:
      "Elegant hilltop villa with panoramic views of the countryside and luxurious amenities.",
    image: "https://images.unsplash.com/photo-1570129477508-701f94c73b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3400,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Downtown Studio",
    description:
      "Cozy downtown studio perfect for solo travelers or couples looking to explore the city.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxvZnQlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Secluded Cabin",
    description:
      "Secluded cabin in the woods, offering tranquility and a perfect getaway from the city.",
    image: "https://images.unsplash.com/photo-1542317854-6b1cf2043e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhYmluJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Smoky Mountains",
    country: "United States",
  },
  {
    title: "Urban Penthouse",
    description:
      "Luxurious urban penthouse with stunning city views, modern decor, and high-end amenities.",
    image: "https://images.unsplash.com/photo-1567767292422-9632fddf73c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxvZnQlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3900,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Beachfront Cottage",
    description:
      "Quaint beachfront cottage with direct beach access and charming decor.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeXNpZGUlMjBmb3JtJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Capri",
    country: "Italy",
  },
  {
    title: "Mountain Lodge",
    description:
      "Spacious mountain lodge with breathtaking views and luxurious amenities, perfect for a family vacation.",
    image: "https://images.unsplash.com/photo-1532898911649-cbd092a234f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhYmluJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Whistler",
    country: "Canada",
  }
];

module.exports = { data: sampleListings };