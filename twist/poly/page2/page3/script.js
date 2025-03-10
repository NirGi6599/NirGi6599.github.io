// Store inventory in sessionStorage
let inventory = JSON.parse(sessionStorage.getItem('inventory')) || [];
let doorUnlocked = sessionStorage.getItem('doorUnlocked') === 'true';


// Update inventory display based on sessionStorage
function updateInventory() {
    if (inventory.includes('Wooden key')) {
        document.getElementById('inventory-text').style.display = 'block';
    }
    if (inventory.includes('Metal key')) {
        document.getElementById('key2-inventory').style.display = 'block';
    }
    if (inventory.includes('Big key')) {
        document.getElementById('key3-inventory').style.display = 'block';
    }

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


// Look Under Carpet button (reward with Wooden key)
function lookUnderCarpet() {
    // Start walking animation
    movePolyToLocation('look-under-carpet');
    
    // Show key and add it to the inventory
    setTimeout(function() {
        document.getElementById('key1').style.display = 'block';
        inventory.push('Wooden key');
        sessionStorage.setItem('inventory', JSON.stringify(inventory));
        
        // Update inventory display
        updateInventory();
    }, 1000); // Adjust to match walking animation duration
}

// Try Locker button (show locked alert if no Key 2)
function tryLocker() {
    // Start walking animation
    movePolyToLocation('try-locker');
    
    // Locker alert
    setTimeout(function() {
        if (inventory.includes('Metal key')) {
            if (!inventory.includes('Big key')) {  // Check if Big key is already in inventory
                alert('You found Big key!');
                inventory.push('Big key');
                sessionStorage.setItem('inventory', JSON.stringify(inventory));
                updateInventory();
            } else {
                alert('The locker is empty — you already have Big key!');
            }
        } else {
            alert('The locker is locked.');
        }
    }, 1000); // Matches walking animation duration
}

// Open Door button (requires password)
function openDoor() {
    // Start walking animation
    movePolyToLocation('open-door');
    
    setTimeout(function() {
        if (doorUnlocked) {
            window.location.href = 'page4/page4.html';  // Go to the next page
        } else {
            // Show password input field
            document.getElementById('password-container').style.display = 'block';
        }
    }, 1000);  // Match walking animation duration
}


// Function to handle Poly walking to a location using walking animation
function movePolyToLocation(action) {
    const poly = document.querySelector('.poly');
    poly.classList.add('walking');  // Add walking class to trigger animation

    // Use transition to smoothly move Poly to different locations
    switch (action) {
        case 'look-under-carpet':
            poly.style.left = '50%';  // Move Poly to the carpet area
            poly.style.bottom = '50%';
            break;
        case 'try-locker':
            poly.style.left = '65%';  // Move Poly to the locker area
            poly.style.bottom = '70%';
            break;
        case 'open-door':
            poly.style.left = '70%';  // Move Poly to the door area
            poly.style.bottom = '50%';
            break;
    }

    // After walking animation is complete, remove the walking class
    setTimeout(function() {
        poly.classList.remove('walking');
    }, 1000);  // Matches the walking animation duration (1s)
}

// Function to check if the password is correct
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = "1312";  // The correct password

    if (password === correctPassword) {
        document.getElementById('feedback').textContent = "Door opened successfully!";
        document.getElementById('feedback').style.display = 'block';
        sessionStorage.setItem('doorUnlocked', 'true');

        // Move to the next page after a short delay
        setTimeout(function() {
            window.location.href = 'page4/page4.html';  // Change to your next page URL
        }, 1500);  // Wait 1.5 seconds before moving to the next page
    } else {
        document.getElementById('feedback').textContent = "Incorrect password, try again!";
        document.getElementById('feedback').style.display = 'block';
    }
}
