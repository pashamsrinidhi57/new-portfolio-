document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hero-content, .card, .timeline-item, .testimonial-card, .work-item, .cta');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s ${entry.target.dataset.delay || '0s'} forwards ease-out`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0'; // Hide elements initially
        el.style.transform = 'translateY(20px)';
        // Stagger the animation for a nicer effect
        if (el.classList.contains('card') || el.classList.contains('work-item')) {
            el.dataset.delay = `${index * 0.1}s`;
        }
        observer.observe(el);
    });
});

// Add keyframes to CSS for the animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);