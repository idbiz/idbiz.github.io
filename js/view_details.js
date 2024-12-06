// Function to update page content with selected item details
function updatePageContent(selectedItem) {
  document.querySelector("h1").textContent = selectedItem.title;
  document.querySelector(".product-image").setAttribute("src", selectedItem.image);
  document.querySelector(".description").textContent = `This is a detailed description for ${selectedItem.title}. Created by ${selectedItem.seller}.`;
  document.querySelector(".price").textContent = `Rp${selectedItem.price}`;
}

// Function to handle no item scenario
function redirectToPortfolio() {
  alert("No product details found. Redirecting to portfolio...");
  window.location.href = "portfolio.html";
}

// Get the selected item from localStorage
const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));

// Check if selected item exists and update the page content or redirect
if (selectedItem) {
  updatePageContent(selectedItem);
} else {
  redirectToPortfolio();
}

// Event listener for Add to Cart button
document.querySelector('.add-to-cart').addEventListener('click', function () {
  alert('Item added to cart!');
});
