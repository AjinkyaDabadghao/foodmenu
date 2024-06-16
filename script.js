const menuItems = [
    { id: 1, name: "Panner Masala ", price: 200 },
    { id: 2, name: "Chiken Biryani ", price: 150 },
    { id: 3, name: "Vada paw ", price: 50 },
    { id: 4, name: "Cold Coffe ", price: 30 },
    { id: 5, name: "Water ", price: 10 }
];

let cart = [];

function displayMenu() {
    const menuElement = document.getElementById('menu');
    menuElement.innerHTML = '';
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
          <span>${item.name}</span>
          <span>₹${item.price}</span>
          <button onclick="addToCart(${item.id})">Add</button>
      `;
        menuElement.appendChild(menuItem);
    });
}


function addToCart(id) {
    const itemToAdd = menuItems.find(item => item.id === id);
    if (itemToAdd) {
        cart.push(itemToAdd);
        displayCart();
    }
}


function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <span>${item.name}</span>
          <span>₹${item.price}</span>
      `;
        cartElement.appendChild(cartItem);
        total += item.price;
    });

    cartElement.innerHTML += `<div class="cart-total">Total: ₹${total}</div>`;
}


function checkout() {
    alert('Redirecting to payment gateway...');
}


displayMenu();