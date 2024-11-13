const products = [
    { id: 1, name: 'Biscuit', price: 9.99, image: './images/product1.jpeg' },
    { id: 2, name: 'Granules', price: 19.99, image: './images/product2.jpeg'  },
    { id: 3, name: 'Ice Cream', price: 29.99, image: './images/product3.jpeg'  },
    { id: 4, name: 'T Shirt', price: 39.99, image: './images/product4.jpeg'  },
    { id: 5, name: 'Vegetables ', price: 49.99, image: './images/product5.jpeg'  },
    { id: 6, name: 'Jam ', price: 59.99, image: './images/product6.jpeg'  },
    { id: 7, name: 'Medicine ', price: 69.99, image: './images/product7.jpeg'  },
    { id: 8, name: 'Home Cleaning ', price: 69.99, image: './images/product8.jpg'  },
    { id: 9, name: 'Skin Care ', price: 69.99, image: './images/product9.jpeg'  },
    { id: 10, name: 'Electronics ', price: 99.99, image: './images/product10.webp'  },
    { id: 11, name: 'Grocery ', price: 59.99, image: './images/product11.jpeg'  },
];

let cart = [];

function renderProducts(filteredProducts = products) 
{
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
    <a href="product-detail.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price.toFixed(2)}</p>
    </a>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
`;

        productList.appendChild(productDiv);
    });
}


function addToCart(productId) 
{
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(
            { ...product, quantity: 1 }
        );
    }

    updateCartCount();
    alert(`${product.name} has been added to your cart.`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    renderCartItems();
}

function renderCartItems() 
{
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <span>${item.name} - ₹${item.price.toFixed(2)} (x${item.quantity})</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: ₹${totalPrice.toFixed(2)}</strong>`;
    cartItemsContainer.appendChild(totalDiv);
}


function removeFromCart(productId) 
{
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex > -1) {
        cart[productIndex].quantity--;
        if (cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1);
        }
    }

    updateCartCount();
    renderCartItems();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart before checking out.');
        return;
    }

    alert('Thank you for your purchase!');
    cart = []; // Clear the cart after checkout

    updateCartCount();
    renderCartItems();
    toggleCart(); // Close the cart modal
}

function searchProducts() 
{
    const searchTerm = document.getElementById('search').value.toLowerCase();

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );

    renderProducts(filteredProducts);
}

function filterProducts(priceRange) 
{
    let filteredProducts;

    switch (priceRange) {
        case 'under-30':
            filteredProducts = products.filter(product => product.price < 30);
            break;
        case '30-50':
            filteredProducts = products.filter(product => product.price >= 30 && product.price <= 50);
            break;
        case 'above-50':
            filteredProducts = products.filter(product => product.price >= 51);
            break;
        default:
            filteredProducts = products; // All products
    }

    renderProducts(filteredProducts);
}

// Initial render of products
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});