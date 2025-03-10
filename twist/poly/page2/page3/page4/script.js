// Store inventory in sessionStorage
let inventory = JSON.parse(sessionStorage.getItem('inventory')) || [];

// Randomize the closet containing Metal key
let keyCloset = sessionStorage.getItem('keyCloset');
if (!keyCloset) {
    keyCloset = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
    sessionStorage.setItem('keyCloset', keyCloset);
}

// Update inventory display based on sessionStorage
function updateInventory() {
    const inventoryText = document.getElementById('inventory-text');
    const key2Inventory = document.getElementById('key2-inventory');
    const key3Inventory = document.getElementById('key3-inventory');

    // Clear current display
    inventoryText.style.display = 'none';
    key2Inventory.style.display = 'none';
    key3Inventory.style.display = 'none';

    // Show inventory items
    if (inventory.includes('Wooden key')) {
        inventoryText.style.display = 'block';
    }
    if (inventory.includes('Metal key')) {
        key2Inventory.style.display = 'block';
    }
    if (inventory.includes('Big key')) {
        key3Inventory.style.display = 'block';
    }
}

// Call this function on page load to show inventory
window.onload = function () {
    updateInventory();
};

// Open Closet button (reward with Metal key in a random closet)
function openCloset(closetNumber) {
    // Start walking animation
    movePolyToLocation('open-closet-' + closetNumber);

    // Closet interactions
    setTimeout(function() {
        if (closetNumber === parseInt(keyCloset)) {
            if (inventory.includes('Wooden key') && !inventory.includes('Metal key')) {
                inventory.push('Metal key');  // Add Metal key to the inventory
                sessionStorage.setItem('inventory', JSON.stringify(inventory));
                alert('You found Metal key!');
                updateInventory();
            } else if (inventory.includes('Metal key')) {
                alert('This closet is empty — you already have Metal key!');
            } else {
                alert('This closet is locked');
            }
        } else {
            alert('This closet is empty.');
        }
    }, 1000); // Adjust to match walking animation duration
}

// Go back to Page 3 button
function goBack() {
    // Start walking animation
    movePolyToLocation('go-back');
    
    setTimeout(function() {
        window.location.href = '../page3.html'; // Change the URL to navigate back to Page 3
    }, 1000);
}

// Go Outside button (requires Big key)
function goOutside() {
    // Start walking animation
    movePolyToLocation('go-outside');
    
    setTimeout(function() {
        if (inventory.includes('Big key')) {
            window.location.href = 'page5/page5.html'; // Go to the outside page
        } else {
            alert('The door is locked');
        }
    }, 1000);
}

// Function to handle Poly walking to a location using walking animation
function movePolyToLocation(action) {
    const poly = document.querySelector('.poly');
    poly.classList.add('walking');  // Add walking class to trigger animation

    // Use transition to smoothly move Poly to different locations
    switch (action) {
        case 'open-closet-1':
            poly.style.left = '35%';  // Move Poly to Closet 1 area
            poly.style.bottom = '75%';
            break;
        case 'open-closet-2':
            poly.style.left = '45%';  // Move Poly to Closet 2 area
            poly.style.bottom = '75%';
            break;
        case 'open-closet-3':
            poly.style.left = '58%';  // Move Poly to Closet 3 area
            poly.style.bottom = '76%';
            break;
        case 'go-back':
            poly.style.left = '28%';  // Move Poly back to Page 3
            poly.style.bottom = '58%';
            break;
        case 'go-outside':
            poly.style.left = '52%';  // Move Poly to the door area for going outside
            poly.style.bottom = '17%';
            break;
    }

    // After walking animation is complete, remove the walking class
    setTimeout(function() {
        poly.classList.remove('walking');
    }, 1000);  // Matches the walking animation duration (1s)
}
