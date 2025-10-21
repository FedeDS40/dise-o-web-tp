// Efectos interactivos para el texto - SOLO hover
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar clase interactiva a títulos importantes (solo para hover)
    const interactiveElements = document.querySelectorAll('.main-title, .section-title, .program-info h3');
    
    interactiveElements.forEach(element => {
        // Dividir el texto en letras para animaciones hover
        const text = element.textContent;
        element.innerHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.className = 'interactive-text';
            span.style.animationDelay = `${i * 0.1}s`;
            element.appendChild(span);
        }
    });

    // Efecto de escritura para títulos principales (solo en index)
    function typeWriter(element, speed = 50) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Aplicar efecto de escritura al título principal
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle && document.location.pathname.includes('index.html')) {
        setTimeout(() => typeWriter(mainTitle, 100), 500);
    }

    // ELIMINADO: Efecto parallax que causaba deformación
    // ELIMINADO: Efecto de partículas que podía causar problemas

    // Efecto de aparición al hacer scroll (solo opacidad, sin transform)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                // Solo opacidad, sin transform para evitar movimientos
            }
        });
    }, observerOptions);

    // Observar elementos para animación de opacidad solamente
    document.querySelectorAll('.category-card, .program-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.3s ease'; // transform solo para hover
        observer.observe(el);
    });
});

// Efecto de hover mejorado (sin movimiento no deseado)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn, .category-card');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
