// Ensure the DOM is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get all list items with the class 'dropdown'
    const dropdowns = document.querySelectorAll("#secondary-nav ul li");
  
    // Iterate through each list item and add event listeners
    dropdowns.forEach(function (dropdown) {
      // When the mouse enters the list item, show the dropdown
      dropdown.addEventListener("mouseenter", function () {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdownContent) {
          dropdownContent.style.display = "block"; // Show dropdown
        }
      });
  
      // When the mouse leaves the list item, hide the dropdown
      dropdown.addEventListener("mouseleave", function () {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropdownContent) {
          dropdownContent.style.display = "none"; // Hide dropdown
        }
      });
    });
  });
    

// Product card hover effect for highlighting the card on hover
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth scroll effect for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
