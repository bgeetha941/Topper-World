const products = [
    { name: 'HairDyer', price: 1400.00, image: 'hairdyer.jpg' },
    { name: 'Headset', price: 49.99, image: 'Headset.jpg' },
    { name: 'TV', price: 40000.00, image: 'Tv.jpg' },
    { name: 'Airpods', price: 700.00, image: 'airpods.jpg' },
    
    // Add more products here
];

// Add products to the page dynamically
const productSection = document.getElementById('products');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;
    productSection.appendChild(productDiv);
});

// Cart functionality
const cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.previousElementSibling.previousElementSibling.innerText;
        cart.push(productName);
        alert(`${productName} added to cart!`);
    });
});
