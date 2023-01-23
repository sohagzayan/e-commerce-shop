export const filterCategories: string[] = [
  "Accessories",
  "Dresses",
  "Phone",
  "Gaming",
  "Networking",
  "Backpacks",
  "Laptop Sleeves",
  "New Arrivals",
];

export const filterGender = [
  {
    name: "Man (60)",
    gender: "man",
  },
  {
    name: "Women (10)",
    gender: "women",
  },
  {
    name: "Unisex (90)",
    gender: "unisex",
  },
];

export const filterColor = [
  "#fff",
  "#8d6abe",
  "#ff497c",
  "#ffdc60",
  "#896ba7",
  "#dbdeff",
  "#badeff",
  "#dfbf9b",
  "#0b79e0",
  "#dbdeff",
  "#ffeddc",
];

export const filterSize = ["xxs", "xs", "s", "m", "l", "xl", "2xl"];

export const filterPrice = ["0", "100", "200", "400", "500", "600"];

export const colorFiltering = [
  { id: 1, name: "White", value: "#fff" },
  { id: 2, name: "Beige", value: "#ECDCBD" },
  { id: 3, name: "Blue", value: "#0061B7" },
  { id: 4, name: "Black", value: "#000" },
  { id: 5, name: "Pink", value: "#ff497c" },
  { id: 6, name: "Green", value: "#4ADE80" },
  { id: 7, name: "Navy", value: "#00007C" },
];

export interface SortsStateType {
  name?: string;
  createdAt?: number;
  ratings?: number;
  views?: number;
  price?: number;
}

export const sortFiltering = [
  { id: 1, name: "All" },
  { id: 2, name: "Newest", createdAt: -1 },
  { id: 2, name: "Oldest", createdAt: 1 },
  { id: 3, name: "Best Rating", ratings: 1 },
  { id: 4, name: "Most Popular", views: 1 },
  { id: 5, name: "Most Expensive", price: -1 },
  { id: 6, name: "Most Cheapest", price: 1 },
];

export interface ReviewSortsStateType {
  name?: string;
  createdAt?: number;
  ratings?: number;
}

export const reviewSortFiltering = [
  { id: 1, name: "Sort Order" },
  { id: 2, name: "Newest", createdAt: -1 },
  { id: 2, name: "Oldest", createdAt: 1 },
  { id: 3, name: "Height Rating", ratings: -1 },
  { id: 4, name: "Lowest Rating", ratings: 1 },
];
