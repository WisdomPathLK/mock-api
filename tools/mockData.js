const resorts = [
  {
    id: 1,
    title: "The May Fair, A Radisson Collection Hotel, Mayfair London",
    slug: "mayfair-hotel",
    clientId: 1,
    category: "Premium"
  },
  {
    id: 2,
    title: "Nobu Malibu",
    slug: "nobu-malibu",
    clientId: 1,
    category: "Premium"
  },
  {
    id: 3,
    title: "The Eton Hotel",
    slug: "the-eton-hotel",
    clientId: 1,
    category: "Premium"
  },
  {
    id: 4,
    title: "U Hotels & Resorts",
    slug: "u-hotels",
    clientId: 1,
    category: "Premium"
  },
  {
    id: 5,
    title: "Sala - Phuket",
    slug: "sala-phuket",
    clientId: 1,
    category: "Premium"
  },
  {
    id: 6,
    title: "Hilton Belfast Templepatrick Golf & Country Club",
    slug: "hhilton-templepatrick",
    clientId: 3,
    category: "Premium"
  },
  {
    id: 7,
    title: "Steak & Lobster Warren Street",
    slug: "steak-and-lobster",
    clientId: 1,
    category: "Premium"
  }
];

const clients = [
  { id: 1, name: "Hospitality Group" },
  { id: 2, name: "Scoff & Banter" },
  { id: 3, name: "Hilton" }
];

const newResort = {
  id: null,
  title: "",
  clientId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newResort,
  resorts,
  clients
};
