// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Skill bar animation
            const fills = entry.target.querySelectorAll('.fill');
            fills.forEach(fill => {
                fill.style.width = fill.getAttribute('data-width');
            });

            // Stagger animation for skill items
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 150);
            });
        }
    });
}, { threshold: 0.1 });

// Observe elements for scroll animations
document.querySelectorAll('.project-card, .about-flex, .contact-card').forEach(el => {
    observer.observe(el);
});

// Sparkle effect on button
const sparkleBtn = document.querySelector('.btn-sparkle');
if (sparkleBtn) {
    sparkleBtn.addEventListener('mousemove', (e) => {
        const rect = sparkleBtn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = 'rgba(255, 255, 255, 0.8)';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.borderRadius = '50%';
        sparkle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        
        sparkleBtn.appendChild(sparkle);
        
        sparkle.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(20)', opacity: 0 }
        ], { duration: 600 });
        
        setTimeout(() => sparkle.remove(), 600);
    });
}