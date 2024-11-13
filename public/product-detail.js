const products = [
    { 
        id: 1, 
        name: 'Biscuit', 
        price: 9.99, 
        image: './images/product1.jpeg', 
        description: 'Delicious biscuits, perfect for snacking.', 
        specifications: 'Weight: 200g, Ingredients: Wheat flour, sugar, etc.', 
        reviews: [
            { user: 'John', rating: 5, comment: 'Best biscuits ever!' },
            { user: 'Jane', rating: 4, comment: 'Tasty but a bit sweet.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 2, 
        name: 'Granules', 
        price: 19.99, 
        image: './images/product2.jpeg', 
        description: 'High-quality granules for your daily needs.', 
        specifications: 'Weight: 500g, Ingredients: Granulated sugar.', 
        reviews: [
            { user: 'Alice', rating: 5, comment: 'Great quality!' },
            { user: 'Bob', rating: 3, comment: 'Average product.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 3, 
        name: 'Ice Cream', 
        price: 29.99, 
        image: './images/product3.jpeg', 
        description: 'Creamy and delicious ice cream, perfect for hot days.', 
        specifications: 'Weight: 500ml, Flavors: Vanilla, Chocolate, Strawberry.', 
        reviews: [
            { user: 'Mike', rating: 5, comment: 'Absolutely loved it!' },
            { user: 'Sara', rating: 4, comment: 'Very creamy, but a bit too sweet for me.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 4, 
        name: 'T Shirt', 
        price: 39.99, 
        image: './images/product4.jpeg', 
        description: 'Comfortable cotton T-shirt available in various sizes.', 
        specifications: 'Sizes: S, M, L, XL; Material: 100% Cotton.', 
        reviews: [
            { user: 'Tom', rating: 5, comment: 'Fits perfectly!' },
            { user: 'Lucy', rating: 4, comment: 'Very comfortable to wear.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 5, 
        name: 'Vegetables', 
        price: 49.99, 
        image: './images/product5.jpeg', 
        description: 'Fresh organic vegetables sourced from local farms.', 
        specifications: 'Varieties: Carrots, Potatoes, Onions; Weight: 1kg.', 
        reviews: [
            { user: 'Emma', rating: 5, comment: 'Super fresh and crunchy!' },
            { user: 'James', rating: 4, comment: 'Good quality, but a bit pricey.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 6, 
        name: 'Jam', 
        price: 59.99, 
        image: './images/product6.jpeg', 
        description: 'Homemade fruit jam, perfect for breakfast.', 
        specifications: 'Weight: 400g; Flavors: Strawberry, Blueberry, Mango.', 
        reviews: [
            { user: 'Sophia', rating: 5, comment: 'Tastes like homemade!' },
            { user: 'Oliver', rating: 4, comment: 'Very fruity and delicious.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 7, 
        name: 'Medicine', 
        price: 69.99, 
        image: './images/product7.jpeg', 
        description: 'Effective medicine for quick relief from cold and flu.', 
        specifications: 'Dosage: As directed; Quantity: 10 tablets.', 
        reviews: [
            { user: 'Liam', rating: 5, comment: 'Worked wonders for me!' },
            { user: 'Mia', rating: 4, comment: 'Good product, but a bit expensive.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 8, 
        name: 'Home Cleaning', 
        price: 69.99, 
        image: './images/product8.jpg', 
        description: 'Effective cleaning solution for all surfaces.', 
        specifications: 'Volume: 1 litre; Ingredients: Eco-friendly components.', 
        reviews: [
            { user: 'Noah', rating: 5, comment: 'Cleans everything effortlessly!' },
            { user: 'Ava', rating: 4, comment: 'Good product, but the scent is strong.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 9, 
        name: 'Skin Care', 
        price: 69.99, 
        image: './images/product9.jpeg', 
        description: 'Nourishing skin care cream for all skin types.', 
        specifications: 'Weight: 50g; Ingredients: Natural extracts, Vitamins.', 
        reviews: [
            { user: 'Isabella', rating: 5, comment: 'My skin feels amazing!' },
            { user: 'Ethan', rating: 4, comment: 'Great moisturizer, but a bit greasy.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 10, 
        name: 'Electronics', 
        price: 99.99, 
        image: './images/product10.webp', 
        description: 'Latest model of wireless headphones with noise cancellation.', 
        specifications: 'Battery Life: 20 hours; Connectivity: Bluetooth 5.0.', 
        reviews: [
            { user: 'Charlotte', rating: 5, comment: 'Best headphones I’ve ever owned!' },
            { user: 'Liam', rating: 4, comment: 'Good sound quality, but a bit bulky.' }
        ],
        stock: 'In Stock'
    },
    { 
        id: 11, 
        name: 'Grocery', 
        price: 59.99, 
        image: './images/product11.jpeg', 
        description: 'Essential grocery items for your daily needs.', 
        specifications: 'Includes: Rice, Lentils, Spices; Weight: 2kg.', 
        reviews: [
            { user: 'Lucas', rating: 5, comment: 'Great value for money!' },
            { user: 'Amelia', rating: 4, comment: 'Good quality, but needs more variety.' }
        ],
        stock: 'In Stock'
    }
];

function getProductById(id) {
    return products.find(product => product.id === id);
}

function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    const product = getProductById(productId);

    if (!product) {
        document.body.innerHTML = '<h2>Product not found</h2>';
        return;
    }

    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `Price: ₹${product.price.toFixed(2)}`;
    document.getElementById('product-description').textContent = product.description;

    // Display specifications
    const specificationsDiv = document.createElement('div');
    specificationsDiv.innerHTML = `<strong>Specifications:</strong> ${product.specifications}`;
    document.getElementById('specifications').appendChild(specificationsDiv);

    // Display stock availability
    const stockDiv = document.createElement('div');
    stockDiv.innerHTML = `<strong>Availability:</strong> ${product.stock}`;
    document.getElementById('stock').appendChild(stockDiv);

    // Display reviews
    const reviewsDiv = document.createElement('div');
    reviewsDiv.innerHTML = '<strong>Customer Reviews:</strong>';
    product.reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.innerHTML = `<strong>${review.user}</strong> (${review.rating} stars): ${review.comment}`;
        reviewsDiv.appendChild(reviewDiv);
    });
    document.getElementById('reviews').appendChild(reviewsDiv);

    document.getElementById('add-to-cart').onclick = () => addToCart(product.id);
}

// Call the function to render product details
renderProductDetails();