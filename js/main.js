// Gallery functionality
const mainImg = document.getElementById('main-img');
const thumbnails = document.querySelectorAll('.thumbnails img');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const images = ['https://picsum.photos/400/400?random=1', 'https://picsum.photos/400/400?random=2', 'https://picsum.photos/400/400?random=3'];

function updateGallery(index) {
    mainImg.src = images[index];
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateGallery(index));
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateGallery(index));
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

// Radio buttons functionality
const fragranceRadios = document.querySelectorAll('input[name="fragrance"]');
const purchaseRadios = document.querySelectorAll('input[name="purchase"]');
const addToCartLink = document.getElementById('add-to-cart');
const subscriptionDetails = document.getElementById('subscription-details');

function updateAddToCart() {
    const selectedFragrance = document.querySelector('input[name="fragrance"]:checked').value;
    const selectedPurchase = document.querySelector('input[name="purchase"]:checked').value;
    const link = `https://example.com/cart?fragrance=${selectedFragrance}&purchase=${selectedPurchase}`;
    addToCartLink.href = link;
    addToCartLink.textContent = `Add ${selectedFragrance} ${selectedPurchase} to Cart`;
}

function updateSubscriptionDetails() {
    const selectedPurchase = document.querySelector('input[name="purchase"]:checked').value;
    let details = '';

    if (selectedPurchase === 'single') {
        details = `
            <h4>Single Subscription</h4>
            <p>Get one bottle of your chosen fragrance delivered monthly.</p>
            <ul>
                <li>Price: $29.99/month</li>
                <li>Free shipping</li>
                <li>Cancel anytime</li>
            </ul>
        `;
    } else if (selectedPurchase === 'double') {
        details = `
            <h4>Double Subscription</h4>
            <p>Get two bottles of your chosen fragrance delivered monthly.</p>
            <ul>
                <li>Price: $49.99/month</li>
                <li>Free shipping</li>
                <li>Save 20%</li>
                <li>Cancel anytime</li>
            </ul>
        `;
    } else if (selectedPurchase === 'trial') {
        details = `
            <h4>Trial Pack</h4>
            <p>Try our fragrances with a one-time trial pack.</p>
            <ul>
                <li>Price: $19.99</li>
                <li>Includes 3 mini bottles</li>
                <li>Free shipping</li>
            </ul>
        `;
    }

    subscriptionDetails.innerHTML = details;
}

fragranceRadios.forEach(radio => radio.addEventListener('change', updateAddToCart));
purchaseRadios.forEach(radio => radio.addEventListener('change', () => {
    updateAddToCart();
    updateSubscriptionDetails();
}));

// Initialize
updateAddToCart();
updateSubscriptionDetails();

// Percentage counter animation
const percentages = document.querySelectorAll('.percentage');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(count) + '%';
    }, 30);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkScroll() {
    percentages.forEach(percentage => {
        if (isElementInViewport(percentage) && !percentage.classList.contains('animated')) {
            animateCounter(percentage);
            percentage.classList.add('animated');
        }
    });

    blogCards.forEach((card, index) => {
        if (isElementInViewport(card) && !card.classList.contains('animated')) {
            setTimeout(() => {
                card.classList.add('animated');
            }, index * 200); // Stagger animation with delay
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animation on scroll for blog cards
const blogCards = document.querySelectorAll('.blog-card');
=======
// Gallery functionality
const mainImg = document.getElementById('main-img');
const thumbnails = document.querySelectorAll('.thumbnails img');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const images = ['https://picsum.photos/400/400?random=1', 'https://picsum.photos/400/400?random=2', 'https://picsum.photos/400/400?random=3'];

function updateGallery(index) {
    mainImg.src = images[index];
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateGallery(index));
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateGallery(index));
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

// Radio buttons functionality
const fragranceRadios = document.querySelectorAll('input[name="fragrance"]');
const purchaseRadios = document.querySelectorAll('input[name="purchase"]');
const addToCartLink = document.getElementById('add-to-cart');
const subscriptionDetails = document.getElementById('subscription-details');

function updateAddToCart() {
    const selectedFragrance = document.querySelector('input[name="fragrance"]:checked').value;
    const selectedPurchase = document.querySelector('input[name="purchase"]:checked').value;
    const link = `https://example.com/cart?fragrance=${selectedFragrance}&purchase=${selectedPurchase}`;
    addToCartLink.href = link;
    addToCartLink.textContent = `Add ${selectedFragrance} ${selectedPurchase} to Cart`;
}

function updateSubscriptionDetails() {
    const selectedPurchase = document.querySelector('input[name="purchase"]:checked').value;
    let details = '';

    if (selectedPurchase === 'single') {
        details = `
            <h4>Single Subscription</h4>
            <p>Get one bottle of your chosen fragrance delivered monthly.</p>
            <ul>
                <li>Price: $29.99/month</li>
                <li>Free shipping</li>
                <li>Cancel anytime</li>
            </ul>
        `;
    } else if (selectedPurchase === 'double') {
        details = `
            <h4>Double Subscription</h4>
            <p>Get two bottles of your chosen fragrance delivered monthly.</p>
            <ul>
                <li>Price: $49.99/month</li>
                <li>Free shipping</li>
                <li>Save 20%</li>
                <li>Cancel anytime</li>
            </ul>
        `;
    } else if (selectedPurchase === 'trial') {
        details = `
            <h4>Trial Pack</h4>
            <p>Try our fragrances with a one-time trial pack.</p>
            <ul>
                <li>Price: $19.99</li>
                <li>Includes 3 mini bottles</li>
                <li>Free shipping</li>
            </ul>
        `;
    }

    subscriptionDetails.innerHTML = details;
}

fragranceRadios.forEach(radio => radio.addEventListener('change', updateAddToCart));
purchaseRadios.forEach(radio => radio.addEventListener('change', () => {
    updateAddToCart();
    updateSubscriptionDetails();
}));

// Initialize
updateAddToCart();
updateSubscriptionDetails();

// Percentage counter animation
const percentages = document.querySelectorAll('.percentage');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(count) + '%';
    }, 30);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkScroll() {
    percentages.forEach(percentage => {
        if (isElementInViewport(percentage) && !percentage.classList.contains('animated')) {
            animateCounter(percentage);
            percentage.classList.add('animated');
        }
    });

    blogCards.forEach((card, index) => {
        if (isElementInViewport(card) && !card.classList.contains('animated')) {
            setTimeout(() => {
                card.classList.add('animated');
            }, index * 200); // Stagger animation with delay
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animation on scroll for blog cards
const blogCards = document.querySelectorAll('.blog-card');
>>>>>>> 96ac1d60e052bce933b11ee8763340907fa33c9b
