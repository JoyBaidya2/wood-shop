
      // Cart Array
      let cart = [];

      // Add to Cart Function
      function addToCart(productName, price) {
          // Check if product already in cart
          const existingItem = cart.find(item => item.name === productName);
          if (existingItem) {
              existingItem.quantity++;
          } else {
              cart.push({ name: productName, price: price, quantity: 1 });
          }
          updateCartBadge();
      }

      // Update Cart Badge
      function updateCartBadge() {
          const badge = document.getElementById('cartBadge');
          const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
          badge.textContent = cartCount;
          badge.classList.remove('hidden');
      }

      // Toggle Cart Modal
      function toggleCart() {
          const modal = document.getElementById('cartModal');
          const cartItemsList = document.getElementById('cartItems');
          cartItemsList.innerHTML = ''; // Clear previous content

          if (cart.length === 0) {
              cartItemsList.innerHTML = '<li class="text-gray-500">Your cart is empty!</li>';
          } else {
              cart.forEach(item => {
                  const listItem = document.createElement('li');
                  listItem.classList.add('flex', 'justify-between', 'py-2', 'border-b');
                  listItem.innerHTML = `
                      <span>${item.name} x ${item.quantity}</span>
                      <span>$${item.price * item.quantity}</span>
                  `;
                  cartItemsList.appendChild(listItem);
              });
          }
          modal.classList.toggle('hidden');
      }

      // Checkout Function
      function checkout() {
          alert('Checkout: ' + JSON.stringify(cart, null, 2));
          cart = []; // Clear the cart
          updateCartBadge();
          toggleCart(); // Close the modal
      }
  