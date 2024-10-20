 // cart section



function updateCartCount() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let countElement = document.getElementById("count");
    countElement.textContent = cartItems.length;
}

document.getElementById("cartLink").addEventListener("click", function (e) {
    e.preventDefault();

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let cartModal = document.getElementById('cartModal');
    let cartItemsContainer = document.getElementById('cartItems');
    let cartSummary = document.getElementById('cartSummary');

    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            let cartItem = document.createElement('div');
            cartItem.innerHTML = `
        <div class="cart-item" data-index="${index}">
            <img src="${item.image}" alt="${item.name}" width="100">
            <p>${item.name}</p>
            <p>${item.description}</p>
            <p id="price-${index}">$${(item.price * item.quantity).toFixed(2)}</p>
            <div>
                <button class="minus-btn" data-index="${index}">-</button>
                <span id="quantity-${index}">${item.quantity}</span>
                <button class="plus-btn" data-index="${index}">+</button>
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
    `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateCartSummary();

        // Checkout button
        cartSummary.innerHTML += `
    <button id="checkoutBtn">Checkout</button>
`;

        document.getElementById('checkoutBtn').addEventListener('click', function () {
            alert('Proceeding to checkout...');
              window.location.href = 'checkout.html'
        });
    }

    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });

    cartModal.style.display = 'block';
});

// Close the modal
document.getElementById("closeCart").addEventListener("click", function () {
    document.getElementById('cartModal').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

// to remove item 
function removeItem(event) {
    let index = event.target.dataset.index;
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    cart.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateCartCount();
    document.getElementById("cartLink").click();  // Refresh the cart modal
}

// Function to increase quantity
function increaseQuantity(event) {
    let index = event.target.dataset.index;
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    cart[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cart));

    document.getElementById(`quantity-${index}`).textContent = cart[index].quantity;
    document.getElementById(`price-${index}`).textContent = `$${(cart[index].price * cart[index].quantity).toFixed(2)}`;

    updateCartSummary();
}

// Function to decrease quantity
function decreaseQuantity(event) {
    let index = event.target.dataset.index;
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(cart));

        document.getElementById(`quantity-${index}`).textContent = cart[index].quantity;
        document.getElementById(`price-${index}`).textContent = `$${(cart[index].price * cart[index].quantity).toFixed(2)}`;

        updateCartSummary();
    }
}

// Function to update the cart subtotal summary
function updateCartSummary() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartSummary = document.getElementById('cartSummary');

    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    cartSummary.innerHTML = `
<h3>Cart Summary</h3>
<p>Subtotal: $${subtotal.toFixed(2)}</p>
`;
}
