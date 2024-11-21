// Mock data for portofolio
const portofolio = [
  {
    id: 1,
    title: "Premium Shopify Dropshipping Store",
    seller: "Ad by Irfan",
    rating: 5.0,
    reviews: 282,
    price: "250.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Professional Wix Website Design",
    seller: "Ad by Chris S.",
    rating: 5.0,
    reviews: 643,
    price: "200.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "WordPress Responsive Website",
    seller: "Ad by Parshant R.",
    rating: 4.9,
    reviews: 355,
    price: "150.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Shopify Dropshipping Store",
    seller: "Ad by Pankaj Maurya",
    rating: 5.0,
    reviews: 448,
    price: "300.000",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Design & Develop Webflow Website",
    seller: "Ala Uddin",
    rating: 4.8,
    reviews: 375,
    price: "380.000",
    image: "https://via.placeholder.com/300x200",
  },
];

// Function to render portofolio dynamically
const renderPortofolio = () => {
  const grid = document.getElementById("portofolioGrid");

  // Clear grid before appending new content
  grid.innerHTML = "";

  // Create and append each portofolio card dynamically
  portofolio.forEach((item) => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg overflow-hidden";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="font-bold text-lg">${item.title}</h2>
        <p class="text-sm text-gray-600">by ${item.seller}</p>
        <p class="text-yellow-500 my-2">${"⭐".repeat(Math.round(item.rating))} (${item.reviews} reviews)</p>
        <p class="font-bold text-blue-600">From Rp${item.price.toLocaleString('id-ID')}</p>
      </div>
      <div class="p-4 border-t">
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          View Details
        </button>
      </div>
    `;

    // Append the created card to the grid
    grid.appendChild(card);
  });
};

// Call render function to populate grid when the page loads
document.addEventListener("DOMContentLoaded", renderPortofolio);
