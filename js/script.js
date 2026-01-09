document.addEventListener('DOMContentLoaded', function() {
  // Accordion functionality
  const accItems = document.querySelectorAll('.acc-item');
  accItems.forEach(item => {
    const button = item.querySelector('button');
    button.addEventListener('click', function() {
      // Remove active class from all items
      accItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
    });
  });

  // Image carousel functionality
  const mainImage = document.querySelector('.image-box img');
  const thumbnails = document.querySelectorAll('.thumbs img');
  const prevBtn = document.querySelector('.nav.prev');
  const nextBtn = document.querySelector('.nav.next');
  let currentIndex = 0;

  const images = [
    'assets/images/Frame 1000004228.jpg',
    'assets/images/Screenshot 2026-01-08 164739.png',
    'assets/images/Screenshot 2026-01-08 164812.png',
    'assets/images/Screenshot 2026-01-08 164830.png',
    'assets/images/Screenshot 2026-01-08 164906.png'
  ];

  function updateImage(index) {
    mainImage.src = images[index];
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  });

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
      currentIndex = index;
      updateImage(currentIndex);
    });
  });

  // Initialize first image as active
  updateImage(0);
});
