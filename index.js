let product = [
  {
    id: 1,
    img: "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg",
    price: 500,
    name: "Cat",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2z0ERwXQUqH29urPuzWueLXKhJAY6SMyAA&s",
    price: 250,
    name: "Dog",
  },
  {
    id: 3,
    img: "https://images.stockcake.com/public/2/2/6/226b41c0-7c52-4c39-985d-076fb0ad4f92_large/vintage-watch-display-stockcake.jpg",
    price: 820,
    name: "Watch",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbxGgmUGIvztvt2ySh0kFon3jc7OVe-QZ5Q&s",
    price: 50000,
    name: "Car",
  },
  {
    id: 5,
    img: "https://content.presspage.com/uploads/1523/f2d90f57-531b-4e28-add8-90171eb0a345/1920_fe-001.jpg?x=1732560151998",
    price: 500000,
    name: "Supra",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bfIZjN4d6cynEqrh5N0oWbYhmZgtMC7uMA&s",
    price: 53000,
    name: "Bike",
  },
  {
    id: 7,
    img: "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg",
    price: 30000,
    name: "Phone",
  },
  {
    id: 8,
    img: "https://www.prioritybicycles.com/cdn/shop/files/600_hero_May2024_1of1.jpg?v=1716221309",
    price: 500,
    name: "Bicycle",
  },
  {
    id: 9,
    img: "https://i5.walmartimages.com/seo/HP-15-6-Ryzen-5-8GB-256GB-Laptop-Rose-Gold_36809cf3-480b-47a5-94f0-e1d5e70c58c0_3.fcc0d6494b0e279a13c32c80c28abfa3.jpeg",
    price: 45000,
    name: "Laptop",
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzE80Oh__jNXebI0C0aI4bIqfPLYd-7HUbw&s",
    price: 65000,
    name: "Computer",
  },
  {
    id: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5r7BEmN5Vd1swBlpIezyIEflJ3OE5cUEM4w&s",
    price: 38000,
    name: "Horse",
  },
];

let result = document.querySelector(".result");

result.innerHTML = product.map((item) => {
  return `
    <div class="card">
      <img src="${item.image}" />
     <div>
      <h2>${item.name}</h2>
      <h4>${item.price}</h4>
     </div>
    </div>`;
});
