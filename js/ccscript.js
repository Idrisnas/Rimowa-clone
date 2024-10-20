$(document).ready(function () {
    let product = localStorage.getItem('selectedProduct');
    if (product) {
        product = JSON.parse(product);

        let firstImage = product.images[0];
        let productCurrency = product.currency || '$';

        let productDetails = `
            <main>
                <div class="grid-2">
                    <div class="here">
                        <div class="grid" style="padding: 1rem;">
                            <div class="grid bg">
                                <img id="image" src="${firstImage}" alt="${product.title}">
                            </div>
                        </div>
                    </div>
                    <div class="there">
                        <p id="name">${product.brand}</p>
                        <H1 id="des">${product.title}</H1>
                        <div>
                            <p>${product.descp}</p>
                            <div class="cart">
                                <button class="cartBtn" id="cart">
                                    <i class="fa-solid fa-cart-shopping"></i> Add To Cart
                                </button>
                                <p><span id="currency">${productCurrency}</span> <span id="price">${formatPrice(product.price)}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        `;
        $('#product-details').html(productDetails);
    } else {
        $('#product-details').html('<p>No product details available.</p>');
    }

    $('#cart').on('click', function () {
        let image = $('#image').attr('src');
        let price = parseFloat($('#price').text().replace(/,/g, ''));
        let name = $('#name').text();
        let description = $('#des').text();

        let cartProduct = {
            image: image,
            price: price,
            name: name,
            description: description,
            currency: productCurrency,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        let productExists = cart.find(item => item.name === cartProduct.name);

        if (productExists) {
            alert('Product is already in the cart');
        } else {
            cart.push(cartProduct);
            localStorage.setItem('cartItems', JSON.stringify(cart));
            updateCartCount();
            alert('Product added to cart');
        }
    });

    function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        $("#count").text(cartItems.length);
    }

    updateCartCount();

    $("#cartLink").on('click', function (e) {
        e.preventDefault();
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartModal = $('#cartModal');
        let cartItemsContainer = $('#cartItems').empty();
        let cartSummary = $('#cartSummary').empty();

        if (cartItems.length === 0) {
            cartItemsContainer.html('<p>Your cart is empty.</p>');
        } else {
            cartItems.forEach((item, index) => {
                cartItemsContainer.append(`
                    <div class="cart-item" data-index="${index}">
                        <img src="${item.image}" alt="${item.name}" width="100">
                        <p>${product.brand}</p>
                        <p>${product.title}</p>
                        <p style="color:black">${item.currency} <span id="price-${index}">${formatPrice(item.price * item.quantity)}</span></p>
                        <div>
                            <button class="minus-btn" data-index="${index}">-</button>
                            <span id="quantity-${index}" style="color:black">${item.quantity}</span>
                            <button class="plus-btn" data-index="${index}">+</button>
                        </div>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>
                `);
            });

            cartSummary.html(`
                <h3>Cart Summary</h3>
                <p id="subtotal">Subtotal: productCurrency ${formatPrice(calculateCartSubtotal())}</p>
                <button id="checkoutBtn">Checkout</button>
            `);

            $('#checkoutBtn').on('click', function () {
                alert('Proceeding to checkout...');
                window.location.href = 'checkout.html';
            });
        }

        $('.plus-btn').on('click', increaseQuantity);
        $('.minus-btn').on('click', decreaseQuantity);
        $('.remove-btn').on('click', removeItem);

        cartModal.show();
    });

    $('#closeCart').on('click', function () {
        $('#cartModal').hide();
    });

    function removeItem() {
        let index = $(this).data('index');
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

        cart.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        updateCartCount();
        $("#cartLink").click();
    }

    function increaseQuantity() {
        let index = $(this).data('index');
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

        cart[index].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cart));

        $(`#quantity-${index}`).text(cart[index].quantity);
        $(`#price-${index}`).text(formatPrice(cart[index].price * cart[index].quantity));

        updateCartSubtotal();
    }

    function decreaseQuantity() {
        let index = $(this).data('index');
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            localStorage.setItem('cartItems', JSON.stringify(cart));

            $(`#quantity-${index}`).text(cart[index].quantity);
            $(`#price-${index}`).text(formatPrice(cart[index].price * cart[index].quantity));

            updateCartSubtotal();
        }
    }

    function updateCartSubtotal() {
        let subtotal = calculateCartSubtotal();
        $('#subtotal').text(`Subtotal: ${productCurrency} ${formatPrice(subtotal)}`);
    }

    function calculateCartSubtotal() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    function formatPrice(price) {
        return price.toLocaleString('en-US', { minimumFractionDigits: 2 });
    }
});
