function showProductDetails() {
  const product = JSON.parse(localStorage.getItem("productDetails"));

  if (product) {
      const productDetails = document.getElementById("product-details");
      productDetails.innerHTML = `
          <div class="flex flex-col md:flex-row gap-6">
              <!-- Product Image -->
              <img src="${product.image}" alt="${product.name}" class="w-full md:w-1/2 h-64 object-cover mb-4 rounded">
              <!-- Product Details -->
              <div class="flex flex-col">
                  <h1 class="text-2xl font-bold text-orange-700">${product.name}</h1>
                  <p class="text-gray-600 mb-2 text-lg"><b class="font-bold text-gray-800">Category:</b> ${product.category}</p>
                  <p id="price" class="text-gray-800 mb-2 text-lg font-semibold">
                      Price: <b class="text-red-400">RS ${product.price}</b>
                  </p>
                  <p class="mb-4 text-gray-700 text-sm">${product.details}</p>
                  <!-- Quantity Selector -->
                  <div class="p-4 rounded-lg border flex flex-col sm:flex-row items-center sm:space-x-4 gap-4">
                      <button id="decrement" class="font-bold text-lg px-6 py-1 rounded bg-gray-200 hover:bg-red-500 hover:text-white transition">
                          -
                      </button>
                      <input id="quantity" type="number" value="1" min="1" class="w-16 text-center border border-gray-300 rounded focus:ring focus:ring-green-300 focus:outline-none">
                      <button id="increment" class="font-bold text-lg px-6 py-1 rounded bg-gray-200 hover:bg-green-500 hover:text-white transition">
                          +
                      </button>
                  </div>
                  <!-- Payment Button -->
                  <button onclick="loadPaymentDetails()"class="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
                      Payment
                  </button>
              </div>
          </div>
      `;

      // Function to simulate a "Buy Now" action
      function paymentNow() {
          alert("You are buying: " + product.name);
      }

      // Get the price element to update it later
      const priceElement = document.getElementById("price");

      // Get the quantity input and the buttons
      const decrementButton = document.getElementById("decrement");
      const incrementButton = document.getElementById("increment");
      const quantityInput = document.getElementById("quantity");

      // Function to update the price based on the quantity
      function updatePrice() {
          const quantity = parseInt(quantityInput.value) || 1;
          const totalPrice = product.price * quantity;  // Calculate total price based on quantity
          priceElement.innerHTML = `
              Price: <b class="text-red-400">RS ${totalPrice}</b>
          `;
      }

      // Increment function
      incrementButton.addEventListener("click", () => {
          const currentValue = parseInt(quantityInput.value) || 1;
          quantityInput.value = currentValue + 1;
          updatePrice();  // Update price when quantity changes
      });

      // Decrement function
      decrementButton.addEventListener("click", () => {
          const currentValue = parseInt(quantityInput.value) || 1;
          if (currentValue > 1) {
              quantityInput.value = currentValue - 1;
              updatePrice();  // Update price when quantity changes
          }
      });

      // Prevent invalid inputs (negative numbers, decimals)
      quantityInput.addEventListener("input", () => {
          const currentValue = parseInt(quantityInput.value) || 1;
          if (currentValue < 1) {
              quantityInput.value = 1;
          }
          updatePrice();  // Update price when quantity changes
      });

      // Initialize the price when the page loads
      updatePrice();
  } else {
      alert("Product details not found!");
  }
}

// Call the function to show the product details
showProductDetails();
