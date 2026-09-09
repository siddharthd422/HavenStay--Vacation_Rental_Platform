const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1018/1200/800",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "pools",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1024/1200/800",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1036/1200/800",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa amid rolling vineyards and olive groves.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1043/1200/800",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "farms",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1015/1200/800",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "camping",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1050/1200/800",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "pools",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1053/1200/800",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "camping",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1031/1200/800",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1044/1200/800",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "arctic",
    geometry: { type: "Point", coordinates: [7.2286, 46.0963] },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1060/1200/800",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "farms",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] },
  },
  {
    title: "Chic Parisian Studio Room",
    description:
      "A compact, beautifully designed studio room a few minutes' walk from the Seine. Ideal for solo travelers or couples.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1039/1200/800",
    },
    price: 1400,
    location: "Paris",
    country: "France",
    category: "rooms",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  },
  {
    title: "Floating Houseboat on the Backwaters",
    description:
      "Drift along Kerala's tranquil backwaters aboard a traditional houseboat, complete with a private deck and home-cooked meals.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1080/1200/800",
    },
    price: 2200,
    location: "Alleppey",
    country: "India",
    category: "boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },
  {
    title: "Stargazer Geodesic Dome",
    description:
      "Sleep under the stars in a climate-controlled geodesic dome with a transparent ceiling, right in the middle of the desert.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1074/1200/800",
    },
    price: 1600,
    location: "Joshua Tree",
    country: "United States",
    category: "domes",
    geometry: { type: "Point", coordinates: [-116.1662, 33.8734] },
  },
  {
    title: "16th-Century Scottish Castle",
    description:
      "Spend the night in a real castle with turrets, stone corridors, and sweeping views of the Scottish countryside.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1048/1200/800",
    },
    price: 5000,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "castles",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
  },
  {
    title: "Overwater Bungalow with Private Pool",
    description:
      "Step straight from your deck into the lagoon, or cool off in your own private plunge pool suspended over turquoise water.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1002/1200/800",
    },
    price: 6500,
    location: "Male",
    country: "Maldives",
    category: "pools",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] },
  },
  {
    title: "Traditional Riad in the Medina",
    description:
      "A restored riad with an open-air courtyard, hand-painted tiles, and a rooftop terrace overlooking the old city.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1003/1200/800",
    },
    price: 1100,
    location: "Marrakech",
    country: "Morocco",
    category: "rooms",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] },
  },
  {
    title: "Nomad Yurt Under the Stars",
    description:
      "Sleep in a traditional felt yurt on the open steppe, with a wood stove for warmth and horses grazing just outside.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1004/1200/800",
    },
    price: 700,
    location: "Terelj National Park",
    country: "Mongolia",
    category: "camping",
    geometry: { type: "Point", coordinates: [107.4667, 47.9] },
  },
  {
    title: "Ice Hotel Suite",
    description:
      "A suite carved entirely from ice and snow, with thermal sleeping bags and reindeer hides to keep you warm through the night.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1005/1200/800",
    },
    price: 2800,
    location: "Jukkasjarvi",
    country: "Sweden",
    category: "arctic",
    geometry: { type: "Point", coordinates: [20.7667, 67.85] },
  },
  {
    title: "Vineyard Farmhouse Escape",
    description:
      "A restored farmhouse set among rows of vines, with a wraparound porch, wine cellar, and views of the valley at sunset.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1006/1200/800",
    },
    price: 2100,
    location: "Napa Valley",
    country: "United States",
    category: "farms",
    geometry: { type: "Point", coordinates: [-122.2869, 38.5025] },
  },
  {
    title: "Canal House Houseboat",
    description:
      "Moored on a quiet canal, this houseboat has a cozy cabin, a sundeck, and bicycles included for exploring the city.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1008/1200/800",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "boats",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  },
  {
    title: "Desert Bubble Dome",
    description:
      "A transparent dome pitched among the dunes, so you can watch the stars turn overhead without leaving your bed.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1009/1200/800",
    },
    price: 1700,
    location: "Merzouga",
    country: "Morocco",
    category: "domes",
    geometry: { type: "Point", coordinates: [-4.0134, 31.0801] },
  },
  {
    title: "Fairytale Castle B&B",
    description:
      "A small, family-run castle at the edge of the Bavarian forest, with turret bedrooms and a hearty breakfast included.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1011/1200/800",
    },
    price: 2400,
    location: "Schwangau",
    country: "Germany",
    category: "castles",
    geometry: { type: "Point", coordinates: [10.7498, 47.5576] },
  },
  {
    title: "High-Rise Studio with Skyline Views",
    description:
      "A sleek studio on the 40th floor with floor-to-ceiling windows, steps from hawker centers and the marina.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1012/1200/800",
    },
    price: 2600,
    location: "Singapore",
    country: "Singapore",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [103.8198, 1.3521] },
  },
  {
    title: "Alpine Ski Cabin",
    description:
      "A timber cabin a short walk from the lifts, with a wood-burning fireplace and a hot tub looking out at the peaks.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/id/1013/1200/800",
    },
    price: 2900,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
  },
];

module.exports = { data: sampleListings };
