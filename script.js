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
  
  document.addEventListener('DOMContentLoaded', function () {
    const viewImageLinks = document.querySelectorAll('.view-image-link'); // Select all the links
    const imageModal = document.getElementById('image-modal');
    const closeModal = document.getElementById('close-modal');
    const modalImage = document.querySelector('.modal-image');
    
    // Function to open the modal with new images
    function openModal(images) {
      const imageArray = images.split(',').map(img => img.trim());
      modalImage.src = imageArray[0]; // Set the first image as default in the modal
      imageModal.style.display = 'block';
      
      // You can cycle through the images by clicking next/prev or just display them one by one.
      // For simplicity, we'll just show the first image.
      // You can implement next/prev logic if needed.
    }
    
    // Add click event to each view-image-link
    viewImageLinks.forEach(link => {
      link.addEventListener('click', function () {
        const images = this.getAttribute('data-images');
        openModal(images);
      });
    });
  
    // Close the modal
    closeModal.addEventListener('click', function() {
      imageModal.style.display = 'none';
    });
  
    // Close the modal when the user clicks outside the modal
    window.addEventListener('click', function(event) {
      if (event.target === imageModal) {
        imageModal.style.display = 'none';
      }
    });
  });  
  

  let currentAdIndex = 0;
  const ads = document.querySelectorAll('.ad-image');
  const totalAds = ads.length;
  
  function showNextAd() {
    // Remove visibility from the current ad
    ads[currentAdIndex].classList.remove('visible');
  
    // Move to the next ad (loop back to the first one)
    currentAdIndex = (currentAdIndex + 1) % totalAds;
  
    // Add visibility to the next ad
    ads[currentAdIndex].classList.add('visible');
  }
  
  // Show the first ad initially
  ads[currentAdIndex].classList.add('visible');
  
  // Change ads every 5 seconds
  setInterval(showNextAd, 5000); // 5000ms = 5 seconds
  
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
