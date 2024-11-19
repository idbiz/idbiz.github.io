// Sample portfolio items
const portfolioItems = [
    { id: 1, name: 'Modern Website Design', price: 120000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'E-commerce UI', price: 150000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Mobile App Prototype', price: 20000, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Photography', price: 20000, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Design Graphis', price: 160000, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Dasboard Design', price: 140000, image: 'https://via.placeholder.com/150' },
  ];
  
  // Cart data
  let cart = [];

  //fungsi untuk format rupiah
  function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'}).format(number);
  }
  
  // Render portfolio items
const portfolioContainer = document.getElementById('portfolio');
portfolioItems.forEach((item) => {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'bg-white p-4 shadow-md rounded';

  itemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="text-lg font-semibold">${item.name}</h3>
    <p class="text-gray-500">Price: ${formatRupiah(item.price)}</p>
    <button 
      class="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" 
      onclick="addToCart(${item.id})">
      Add to Cart
    </button>
  `;

  portfolioContainer.appendChild(itemDiv);
});

// Add item to cart
function addToCart(id) {
  const item = portfolioItems.find((item) => item.id === id);
  cart.push(item);
  renderCart();
}

// Render cart
function renderCart() {
  const cartContainer = document.getElementById('cart');
  const totalPriceEl = document.getElementById('totalPrice');
  cartContainer.innerHTML = '';

  // Group items by ID and calculate quantity
  const groupedItems = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id]
      ? { ...item, qty: acc[item.id].qty + 1 }
      : { ...item, qty: 1 };
    return acc;
  }, {});

  let totalPrice = 0;

  // Render each grouped item in the cart
  Object.values(groupedItems).forEach((item) => {
    totalPrice += item.price * item.qty;

    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'flex justify-between items-center';

    cartItemDiv.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>${formatRupiah(item.price * item.qty)}</span>
    `;

    cartContainer.appendChild(cartItemDiv);
  });

  // Update total price
  totalPriceEl.textContent = `Total: ${formatRupiah(totalPrice)}`;
}

// Checkout functionality
document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  alert('Thank you for your purchase!');
  cart = [];
  renderCart();
});