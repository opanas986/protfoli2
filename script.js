document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector('.cursor');

    // Движение курсора и свечения фона
    document.addEventListener('mousemove', (e) => {
        // Курсор
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Свечение
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--x', x + '%');
        document.documentElement.style.setProperty('--y', y + '%');
    });

    // Анимация при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Эффект увеличения курсора на кнопках
    document.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(2)');
        link.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
    });
});