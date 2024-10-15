document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById('new-item-text');
    const groceryList = document.getElementById('grocery-list');
    const cartList = document.getElementById('cart-list');
    const addedToCartDiv = document.getElementById('added-to-cart');
    const trashCan = document.getElementById('trash-can');
    
    // Load data from localStorage
    let groceryItems = JSON.parse(localStorage.getItem('groceryItems')) || [];
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Render the lists
    function renderLists() {
        groceryList.innerHTML = '';
        cartList.innerHTML = '';
        
        groceryItems.forEach(item => {
            const li = createListItem(item, false);
            groceryList.appendChild(li);
        });

        cartItems.forEach(item => {
            const li = createListItem(item, true);
            cartList.appendChild(li);
        });

        // Show or hide the trash can and added to cart section based on cart items
        if (cartItems.length > 0) {
            addedToCartDiv.style.display = 'block';
            trashCan.style.display = 'block';
        } else {
            addedToCartDiv.style.display = 'none';
            trashCan.style.display = 'none';
        }
    }

    // Create a list item element
    function createListItem(item, isChecked) {
        const li = document.createElement('li');
        li.classList.add('list-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isChecked;
        
        const span = document.createElement('span');
        span.textContent = item;
        if (isChecked) {
            span.classList.add('checked');
        }
        
        li.appendChild(checkbox);
        li.appendChild(span);
        
        // Handle click and touchstart events to toggle the checkbox
        li.addEventListener('click', function(event) {
            event.preventDefault();
            checkbox.checked = !checkbox.checked;
            toggleItem(item);
        });

//        li.addEventListener('touchstart', function(event) {
//            event.preventDefault();
//            checkbox.checked = !checkbox.checked;
//            toggleItem(item);
//        });

        return li;
    }

    // Add a new item to the grocery list
    function addItem(item) {
        if (item.trim() !== '') {
            groceryItems.push(item);
            groceryItems.sort();
            saveAndRender();
        }
    }

    // Toggle an item's status between grocery and cart lists
    function toggleItem(item) {
        if (groceryItems.includes(item)) {
            groceryItems = groceryItems.filter(i => i !== item);
            cartItems.push(item);
        } else {
            cartItems = cartItems.filter(i => i !== item);
            groceryItems.push(item);
        }
        groceryItems.sort();
        cartItems.sort();
        saveAndRender();
    }

    // Save lists to localStorage and render them
    function saveAndRender() {
        localStorage.setItem('groceryItems', JSON.stringify(groceryItems));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderLists();
    }

    // Handle adding new items
    newItemInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            addItem(newItemInput.value);
            newItemInput.value = '';
        }
    });

    // Handle trash can click to delete all cart items
    trashCan.addEventListener('click', function() {
        if (confirm('Do you want to delete all checked items?')) {
            cartItems = [];
            saveAndRender();
        }
    });

    // Initial rendering
    renderLists();
});
