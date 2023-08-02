const bag_data = [
  {
    id: 1,
    name: "MACRAMÉ SHOPPER BAG",
    price: 99,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4077/140/002/02/4077140002_2_1_8.jpg?t=1678354069348&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "red",
    discountedPrice: 79,
    stars: 4,
  },
  {
    id: 2,
    name: "Crossbody bag",
    price: 59,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4140/240/002/4140240002_2_1_8.jpg?t=1688381714247&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "blue",
    stars: 5,
  },
  {
    id: 3,
    name: "Crossbody bag with handles",
    price: 79,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4140/240/040/4140240040_2_1_8.jpg?t=1688383806813&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "green",
    stars: 4,
  },
  {
    id: 4,
    name: "Quilted tote bag",
    price: 159,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4118/240/040/4118240040_2_1_8.jpg?t=1690284905189&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    discountedPrice: 129,
    stars: 5,
  },
  {
    id: 5,
    name: "Urban shopper bag",
    price: 129,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4077/240/040/4077240040_2_1_8.jpg?t=1686579487215&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 3,
  },
  {
    id: 6,
    name: "Urban belt bag",
    price: 49,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4055/140/002/4055140002_2_1_8.jpg?t=1674118289522&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 4,
  },
  {
    id: 7,
    name: "Floral crochet tote bag",
    price: 29,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4104/140/004/4104140004_2_1_8.jpg?t=1682420717696&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 5,
  },
  {
    id: 8,
    name: "Shopper bag with detail",
    price: 399,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4038/140/009/4038140009_2_1_8.jpg?t=1677689930867&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    discountedPrice: 299,
    stars: 4,
  },
  {
    id: 9,
    name: "Shopper bag with detail",
    price: 259,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4126/240/009/4126240009_2_1_8.jpg?t=1686580458662&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    discountedPrice: 229,
    stars: 5,
  },
  {
    id: 10,
    name: "PRINTED URBAN BACKPACK",
    price: 359,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4057/140/197/4057140197_2_1_8.jpg?t=1671536853833&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 4,
  },
  {
    id: 11,
    name: "MACRAMÉ SHOPPER BAG",
    price: 99,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4077/140/002/02/4077140002_2_1_8.jpg?t=1678354069348&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "red",
    stars: 3,
  },
  {
    id: 12,
    name: "Crossbody bag",
    price: 59,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4140/240/002/4140240002_2_1_8.jpg?t=1688381714247&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "blue",
    stars: 4,
  },
  {
    id: 13,
    name: "Crossbody bag with handles",
    price: 79,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4140/240/040/4140240040_2_1_8.jpg?t=1688383806813&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "green",
    stars: 5,
  },
  {
    id: 14,
    name: "Quilted tote bag",
    price: 159,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4118/240/040/4118240040_2_1_8.jpg?t=1690284905189&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 3,
  },
  {
    id: 15,
    name: "Urban shopper bag",
    price: 129,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4077/240/040/4077240040_2_1_8.jpg?t=1686579487215&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 4,
  },
  {
    id: 16,
    name: "Urban belt bag",
    price: 49,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4055/140/002/4055140002_2_1_8.jpg?t=1674118289522&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 5,
  },
  {
    id: 17,
    name: "Floral crochet tote bag",
    price: 29,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4104/140/004/4104140004_2_1_8.jpg?t=1682420717696&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 4,
  },
  {
    id: 18,
    name: "Shopper bag with detail",
    price: 399,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4038/140/009/4038140009_2_1_8.jpg?t=1677689930867&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    discountedPrice: 349,
    stars: 5,
  },
  {
    id: 19,
    name: "Shopper bag with detail",
    price: 259,
    image:
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/4126/240/009/4126240009_2_1_8.jpg?t=1686580458662&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 3,
  },
  {
    id: 20,
    name: "PRINTED URBAN BACKPACK",
    price: 359,
    image:
      "https://static.pullandbear.net/2/photos//2023/V/1/1/p/4057/140/197/4057140197_2_1_8.jpg?t=1671536853833&imwidth=1125",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    color: "yellow",
    stars: 2,
  },
];

export default bag_data;
