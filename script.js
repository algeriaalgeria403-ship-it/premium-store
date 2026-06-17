// Products Data
const products = [
    { name: 'Netflix Premium', price: '250 DZD', emoji: '🎬', description: '4K Streaming + 4 Screens' },
    { name: 'ChatGPT Plus', price: '300 DZD', emoji: '🤖', description: 'Advanced AI Assistant' },
    { name: 'CapCut Pro', price: '200 DZD', emoji: '✂️', description: 'Video Editing Pro' },
    { name: 'Spotify Premium', price: '250 DZD', emoji: '🎵', description: 'Ad-Free Music' },
    { name: 'Adobe Creative Cloud', price: '400 DZD', emoji: '🎨', description: 'All Creative Apps' },
    { name: 'Canva Pro', price: '180 DZD', emoji: '🖼️', description: 'Design Templates' },
    { name: 'YouTube Premium', price: '220 DZD', emoji: '📺', description: 'No Ads + Downloads' },
    { name: 'Grammarly Premium', price: '150 DZD', emoji: '✍️', description: 'Writing Assistant' }
];

// Reviews Data
const reviews = [
    { name: 'Ahmed Ali', product: 'Netflix', rating: '★★★★★', text: 'Excellent service! Got my account in 5 minutes.' },
    { name: 'Fatima Hassan', product: 'ChatGPT Plus', rating: '★★★★★', text: 'Very fast delivery and great customer support!' },
    { name: 'Mohamed Ibrahim', product: 'Spotify', rating: '★★★★★', text: 'Best premium store in Algeria. Highly recommended!' },
    { name: 'Sarah Ahmed', product: 'CapCut Pro', rating: '★★★★★', text: 'Amazing experience. Will buy again!' },
    { name: 'Karim Hassan', product: 'Adobe CC', rating: '★★★★★', text: 'Super fast and reliable. 5 stars deserved!' }
];

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        initializeApp();
    }, 2500);
});

// Initialize App
function initializeApp() {
    loadProducts();
    loadReviews();
    setupCountdown();
    setupNotifications();
    setupAnimations();
    setupEventListeners();
}

// Load Products
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
                <button class="product-btn" onclick="selectProduct('${product.name}', '${product.price}')">Buy Now</button>
            </div>
        </div>
    `).join('');

    // Populate select dropdown
    const select = document.getElementById('selectedProduct');
    if (select) {
        select.innerHTML += products.map(p => `<option value="${p.name} - ${p.price}">${p.name}</option>`).join('');
    }
}

// Load Reviews
function loadReviews() {
    const carousel = document.getElementById('reviewsCarousel');
    if (!carousel) return;

    carousel.innerHTML = reviews.map((review, index) => `
        <div class="review-card" style="animation: slideIn 0.5s ease-out ${index * 0.1}s both;">
            <div class="review-header">
                <div class="review-avatar">${review.name.charAt(0)}</div>
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <p>${review.product}</p>
                </div>
            </div>
            <div class="review-stars">${review.rating}</div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Countdown Timer
function setupCountdown() {
    function updateTimer() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const timeLeft = endOfDay - now;
        
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        
        const formatNum = num => String(num).padStart(2, '0');
        
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = formatNum(hours);
        if (minutesEl) minutesEl.textContent = formatNum(minutes);
        if (secondsEl) secondsEl.textContent = formatNum(seconds);
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Live Notifications
function setupNotifications() {
    const notifications = [
        'Ahmed purchased Netflix 2 minutes ago',
        'Mohamed purchased ChatGPT Premium',
        'Sarah purchased CapCut Pro',
        'Fatima purchased Spotify Premium',
        'Hassan purchased Adobe Creative Cloud',
        'Amira purchased YouTube Premium'
    ];
    
    function addNotification() {
        const container = document.getElementById('notificationsContainer');
        if (!container) return;
        
        const notification = notifications[Math.floor(Math.random() * notifications.length)];
        const div = document.createElement('div');
        div.className = 'notification';
        div.textContent = '✓ ' + notification;
        container.appendChild(div);
        
        setTimeout(() => div.remove(), 5000);
    }
    
    setInterval(addNotification, 5000);
}

// Animate Counters
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Setup Animations
function setupAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

// Setup Event Listeners
function setupEventListeners() {
    // Buy Now buttons
    const buyNowBtn = document.getElementById('buyNowBtn');
    const ctaButton = document.getElementById('ctaButton');
    if (buyNowBtn) buyNowBtn.addEventListener('click', openOrderModal);
    if (ctaButton) ctaButton.addEventListener('click', openOrderModal);
    
    // Modal
    const closeModal = document.getElementById('closeModal');
    const orderModal = document.getElementById('orderModal');
    if (closeModal) closeModal.addEventListener('click', closeOrderModal);
    if (orderModal) orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) closeOrderModal();
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Scroll Progress
    window.addEventListener('scroll', updateScrollProgress);
    
    // FAQ
    setupFAQ();
    
    // Floating Assistant
    setupFloatingAssistant();
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('navMenu').classList.remove('active');
            }
        });
    });
    
    // Spin Wheel
    setupSpinWheel();
}

// Open Order Modal
function openOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) modal.classList.add('active');
}

// Close Order Modal
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) modal.classList.remove('active');
}

// Select Product
function selectProduct(name, price) {
    const select = document.getElementById('selectedProduct');
    if (select) {
        select.value = `${name} - ${price}`;
    }
    openOrderModal();
}

// Submit via WhatsApp
function submitViaWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('customerName').value;
    const number = document.getElementById('whatsappNumber').value;
    const product = document.getElementById('selectedProduct').value;
    const notes = document.getElementById('notes').value;
    
    if (!name || !number || !product) {
        alert('Please fill in all required fields');
        return;
    }
    
    const message = `Hello! I would like to order: ${product}\nName: ${name}\nNotes: ${notes || 'None'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/213123456789?text=${encodedMessage}`, '_blank');
    
    showConfirmation(`Order sent to WhatsApp successfully!`);
    document.getElementById('orderForm').reset();
    closeOrderModal();
}

// Submit via Telegram
function submitViaTelegram(e) {
    e.preventDefault();
    const name = document.getElementById('customerName').value;
    const number = document.getElementById('whatsappNumber').value;
    const product = document.getElementById('selectedProduct').value;
    const notes = document.getElementById('notes').value;
    
    if (!name || !number || !product) {
        alert('Please fill in all required fields');
        return;
    }
    
    const message = `Hello! I would like to order: ${product}\nName: ${name}\nContact: ${number}\nNotes: ${notes || 'None'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/botusername?start=${encodedMessage}`, '_blank');
    
    showConfirmation(`Order sent to Telegram successfully!`);
    document.getElementById('orderForm').reset();
    closeOrderModal();
}

// Show Confirmation
function showConfirmation(message) {
    const popup = document.getElementById('confirmationPopup');
    const msgEl = document.getElementById('confirmationMessage');
    if (popup && msgEl) {
        msgEl.textContent = message;
        popup.classList.add('active');
    }
}

// Close Confirmation
function closeConfirmation() {
    const popup = document.getElementById('confirmationPopup');
    if (popup) popup.classList.remove('active');
}

// Select Plan
function selectPlan(plan) {
    const planNames = {
        'single': 'Single Account - 250 DZD',
        'starter': 'Starter Pack - 450 DZD',
        'premium': 'Premium Pack - 750 DZD',
        'ultimate': 'Ultimate Pack - 999 DZD'
    };
    const select = document.getElementById('selectedProduct');
    if (select) {
        select.value = planNames[plan];
    }
    openOrderModal();
}

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Update Scroll Progress
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
}

// Setup FAQ
function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Setup Floating Assistant
function setupFloatingAssistant() {
    const toggle = document.getElementById('assistantToggle');
    const menu = document.getElementById('assistantMenu');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

// Assistant Action
function assistantAction(action) {
    const messages = {
        'pricing': 'Check our pricing section for all available plans.',
        'payment': 'We accept Credit Card, WhatsApp Pay, Bank Transfer, and Cryptocurrency.',
        'info': 'All our products are verified premium accounts with instant delivery.',
        'support': 'Contact us on WhatsApp: +213 123 456 789 or Email: support@premiumhub.com'
    };
    
    alert(messages[action]);
    document.getElementById('assistantMenu').classList.remove('active');
}

// Spin Wheel Setup
function setupSpinWheel() {
    const canvas = document.getElementById('rewardWheel');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rewards = ['10% Discount', '20% Discount', 'Free Beta', 'Extra Gift', 'Lucky Bonus'];
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    
    function drawWheel(rotation = 0) {
        const radius = canvas.width / 2;
        const sliceAngle = (Math.PI * 2) / rewards.length;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        rewards.forEach((reward, index) => {
            const startAngle = sliceAngle * index + rotation;
            const endAngle = startAngle + sliceAngle;
            
            // Draw slice
            ctx.beginPath();
            ctx.arc(radius, radius, radius - 20, startAngle, endAngle);
            ctx.lineTo(radius, radius);
            ctx.fillStyle = colors[index];
            ctx.fill();
            
            // Draw text
            ctx.save();
            ctx.translate(radius, radius);
            ctx.rotate(startAngle + sliceAngle / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Arial';
            ctx.fillText(reward, radius - 50, 10);
            ctx.restore();
        });
        
        // Draw center circle
        ctx.beginPath();
        ctx.arc(radius, radius, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
    
    let isSpinning = false;
    const spinBtn = document.getElementById('spinBtn');
    
    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            if (isSpinning) return;
            
            isSpinning = true;
            spinBtn.disabled = true;
            
            const randomRotation = Math.random() * Math.PI * 2;
            const duration = 4000;
            const startTime = Date.now();
            
            function animate() {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    const rotation = randomRotation * progress * 10 - (progress * progress) * 5;
                    drawWheel(rotation);
                    requestAnimationFrame(animate);
                } else {
                    drawWheel(randomRotation * 10);
                    const winningIndex = Math.floor((randomRotation / (Math.PI * 2)) * rewards.length) % rewards.length;
                    showSpinResult(rewards[winningIndex]);
                    isSpinning = false;
                    spinBtn.disabled = false;
                }
            }
            
            animate();
        });
    }
    
    drawWheel();
}

// Show Spin Result
function showSpinResult(reward) {
    const resultEl = document.getElementById('spinResult');
    if (resultEl) {
        resultEl.innerHTML = `🎉 Congratulations! You won: <strong>${reward}</strong>`;
        resultEl.style.animation = 'slideUp 0.5s ease-out';
    }
}

// Initialize
loadTheme();