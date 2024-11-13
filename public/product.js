product ```javascript
const productList = document.getElementById('product-list');

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price.toFixed(2)}</p>
        <a href="product.html?id=${product.id}">View Details</a>
    `;
    productList.appendChild(productItem);
});