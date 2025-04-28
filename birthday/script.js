// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);
});

// Your love letter content
const letterContent = `My Dearest Love,

Every day with you feels like a beautiful dream that I never want to wake up from. 
Your smile brightens my darkest days, and your love makes my heart skip a beat.

On your special day, I want you to know that:
✨ You are the most beautiful person I've ever known
💖 Your happiness means the world to me
🌟 You make every moment magical

I love everything about you:
- The way you scrunch your nose when you laugh
- How your eyes light up when you're excited
- Your kind and caring heart
- The little dance you do when you're happy

Happy Birthday, my love! Here's to many more years of:
🎈 Creating beautiful memories together
🌹 Sharing endless laughs
💑 Growing stronger in our love

Forever Yours,
[Your Name]`;

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typedLetter', {
        strings: [letterContent],
        typeSpeed: 50,
        backSpeed: 0,
        cursorChar: '',
        loop: false,
        onStringTyped: function() {
            const cursor = document.createElement('span');
            cursor.className = 'typed-cursor';
            document.getElementById('typedLetter').appendChild(cursor);
        }
    });
});

// Confetti surprise
function triggerConfetti() {
    const colors = ['#ff4b8d', '#ff85a2', '#ffb3c1', '#ffffff'];
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: colors,
                angle: i % 2 === 0 ? 60 : 120,
            });
        }, i * 200);
    }
}

// Photo Gallery with captions
document.querySelectorAll('.photo-container img').forEach(img => {
    img.addEventListener('click', function() {
        const caption = this.getAttribute('data-caption');
        alert(caption);
    });
});

// Hidden Surprises
const surprises = {
    surprise1: {
        title: "Our Song",
        content: "🎵 [Add your special song here] 🎵",
        action: () => {
            // Add code to play your special song
            alert("Playing our special song...");
        }
    },
    surprise2: {
        title: "Secret Message",
        content: "Here's why I fall in love with you every day...",
        action: () => {
            revealSecretMessage();
        }
    },
    surprise3: {
        title: "Special Memory",
        content: "Remember this moment?",
        action: () => {
            showSpecialMemory();
        }
    }
};

function revealSecretMessage() {
    // Add your secret message reveal animation
    const messages = [
        "I love how you make me smile 😊",
        "Your kindness inspires me 💖",
        "You're my favorite person 💑",
        // Add more messages
    ];
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < messages.length) {
            alert(messages[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

function showSpecialMemory() {
    // Add code to show a special photo or memory
    alert("Loading our special memory...");
}

// Initialize surprise boxes
Object.keys(surprises).forEach(id => {
    document.getElementById(id).addEventListener('click', surprises[id].action);
});

// Add floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    
    // Random size class
    const sizeClass = `size-${Math.ceil(Math.random() * 3)}`;
    heart.classList.add(sizeClass);
    
    // Random speed class
    const speedClass = `speed-${Math.ceil(Math.random() * 3)}`;
    heart.classList.add(speedClass);
    
    // Random vertical position
    heart.style.top = Math.random() * 100 + '%';
    
    // Add some random wobble
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 10000); // Slightly longer than the longest animation duration
}

// Create hearts more frequently
setInterval(createHeart, 200);

// Create initial batch of hearts
for(let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 200);
}

// Photo Gallery Functionality
const photoGallery = document.getElementById('photoGallery');
const photoUpload = document.getElementById('photoUpload');

photoUpload.addEventListener('change', function(e) {
    const files = e.target.files;
    
    for(let file of files) {
        if(file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'photo-container';
                imgContainer.style.cssText = `
                    position: relative;
                    height: 200px;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                `;

                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `;

                imgContainer.appendChild(img);
                photoGallery.insertBefore(imgContainer, photoUpload.parentElement);
            };

            reader.readAsDataURL(file);
        }
    }
});

// Auto-save letter content
const loveLetter = document.getElementById('loveLetter');
loveLetter.addEventListener('input', function() {
    localStorage.setItem('savedLetter', this.value);
});

// Load saved letter content
const savedLetter = localStorage.getItem('savedLetter');
if(savedLetter) {
    loveLetter.value = savedLetter;
}

// Add this to your existing JavaScript
document.querySelector('.letter-container').addEventListener('mousemove', function(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.letter-container').addEventListener('mouseleave', function() {
    this.style.transform = 'rotateY(0) rotateX(0)';
});

// Add subtle animation to hearts
function animateHearts() {
    const hearts = document.querySelectorAll('.decorative-heart');
    hearts.forEach(heart => {
        heart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
    });
}

setInterval(animateHearts, 2000);

// Add this to your existing JavaScript
document.querySelector('.surprise-btn').addEventListener('click', function() {
    // Trigger confetti
    triggerConfetti();
    
    // Show Arabic message with animation
    const messageContainer = document.getElementById('arabicMessage');
    messageContainer.innerHTML = `
        <span class="heart-decoration heart-left">❤️</span>
            عيد ميلاد سعيد يا حبيبتي ١٩
        <span class="heart-decoration heart-right">❤️</span>
    `;
    
    // Force reflow
    messageContainer.offsetHeight;
    
    // Show message with animation
    messageContainer.classList.add('show');
    
    // Add sparkle animation
    createSparkles(messageContainer);
    
    // Disable button after click
    this.disabled = true;
    this.style.opacity = '0.7';
});

// Add sparkle effect
function createSparkles(container) {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: gold;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkleAnim 1s ease-in-out infinite;
            animation-delay: ${Math.random() * 1}s;
        `;
        container.appendChild(sparkle);
    }
}

// Add sparkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0%, 100% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);

// Add Arabic font to document head
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@700&display=swap';
document.head.appendChild(fontLink);

// Function to show birthday message
function showBirthdayMessage() {
    // Trigger confetti
    triggerConfetti();
    
    // Get elements
    const messageContainer = document.getElementById('arabicMessage');
    const surpriseBtn = document.getElementById('surpriseBtn');
    
    // Update message content
    messageContainer.innerHTML = `
        <span class="heart-decoration"></span>
        عيد ميلاد سعيد يا حبيبتي ١٩
        <span class="heart-decoration">❤️</span>
    `;
    
    // Show message with animation
    messageContainer.style.display = 'block';
    setTimeout(() => {
        messageContainer.classList.add('show');
    }, 100);
    
    // Add sparkles
    createSparkles(messageContainer);
    
    // Disable button
    surpriseBtn.disabled = true;
    surpriseBtn.style.opacity = '0.7';
}

// Make sure confetti.js is loaded
if (typeof confetti === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    document.head.appendChild(script);
} 