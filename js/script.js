document.addEventListener('DOMContentLoaded', function() {
    // Configuração do Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const maxSlide = slides.length - 1;
    
    // Inicializa o slider
    function initSlider() {
        // Ajusta a largura do slider baseado no número de slides
        slider.style.width = `${slides.length * 100}%`;
        
        // Configura cada slide
        slides.forEach((slide, index) => {
            slide.style.width = `${100 / slides.length}%`;
        });
        
        // Mostra o primeiro slide
        goToSlide(0);
    }
    
    // Função para ir para um slide específico
    function goToSlide(slideIndex) {
        slider.style.transform = `translateX(-${slideIndex * (100 / slides.length)}%)`;
        currentSlide = slideIndex;
    }
    
    // Evento para o botão anterior
    prevBtn.addEventListener('click', function() {
        currentSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
        goToSlide(currentSlide);
    });
    
    // Evento para o próximo botão
    nextBtn.addEventListener('click', function() {
        currentSlide = currentSlide === maxSlide ? 0 : currentSlide + 1;
        goToSlide(currentSlide);
    });
    
    // Inicializa o slider
    initSlider();
    
    // Adiciona smooth scroll para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajusta para compensar a altura do menu
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de fade-in para elementos quando aparecem na tela
    const fadeInElements = document.querySelectorAll('.section');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, fadeInOptions);
    
    fadeInElements.forEach(element => {
        element.classList.add('fade-out'); // Classe inicial para elementos invisíveis
        fadeInObserver.observe(element);
    });
    
    // Adiciona classe ativa para o link de navegação atual
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Verifica a posição do scroll para atualizar o link ativo
    window.addEventListener('scroll', setActiveNavLink);
    
    // Adiciona os estilos CSS necessários para as animações
    const style = document.createElement('style');
    style.textContent = `
        .fade-out {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        .nav-links a.active {
            color: var(--primary-color);
        }
        .nav-links a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
}); 