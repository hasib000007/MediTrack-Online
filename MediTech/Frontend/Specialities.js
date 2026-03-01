
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

 
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    
    window.toggleMobileMenu = () => {
        if (navMenu && hamburger) {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('open');
            
   
            const isActive = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isActive);
        }
    };

    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
        } else {
            header.style.padding = "15px 0";
            header.style.backgroundColor = "#ffffff";
            header.style.boxShadow = "none";
        }
    });

    
    const searchInput = document.querySelector('.search-box input');
    const categoryCards = document.querySelectorAll('.category-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase().trim();

            categoryCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(value) || desc.includes(value)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
          
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

});

const style = document.createElement('style');
style.textContent = `
    .nav-menu.active { 
        display: flex !important; 
        flex-direction: column;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        padding: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        z-index: 999;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);