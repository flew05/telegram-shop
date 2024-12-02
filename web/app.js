document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Книга', price: 500, image: 'assets/book.jpg' },
        { id: 2, name: 'Ручка', price: 50, image: 'assets/pen.jpg' },
        { id: 3, name: 'Кофе', price: 150, image: 'assets/coffee.jpg' },
    ];

    const cart = [];

    const productContainer = document.getElementById('products');

    function renderProducts() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price} ₽</p>
                <button data-id="${product.id}">Добавить в корзину</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    productContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = e.target.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            cart.push(product);
            alert(`${product.name} добавлен в корзину!`);
        }
    });

    renderProducts();
});
