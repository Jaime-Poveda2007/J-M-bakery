        // Espera a que el documento esté completamente cargado antes de ejecutar cualquier código
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger'); // Selecciona el botón hamburguesa
            const navLinks = document.querySelector('.nav-links');  // Selecciona el contenedor de enlaces
            const nav = document.querySelector('nav');             // Selecciona la barra de navegación
            
            // Añade un evento 'click' al botón hamburguesa
            hamburger.addEventListener('click', function() {
                // Toggle de clases - añade o quita la clase dependiendo de si ya existe
                navLinks.classList.toggle('active');        // Muestra/oculta el menú
                nav.classList.toggle('nav-active');         // Cambia el estilo del botón hamburguesa
            });
            /**
             * ANIMACIONES BASADAS EN SCROLL (INTERSECTION OBSERVER)*/
            // Opciones para el observer - define cuándo se considera que un elemento es visible
            const observerOptions = {
                root: null,           // usa el viewport como contenedor de referencia
                rootMargin: '0px',    // sin margen adicional
                threshold: 0.3        // activa cuando el 30% del elemento es visible
            };
            
            // Función para animar las tarjetas de productos
            const animateCards = (entries, observer) => {
                entries.forEach(entry => {// Si el elemento está entrando en la pantalla
                    if (entry.isIntersecting) {// Aplicamos la animación de aparecer
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    } else {// Si el elemento sale de la pantalla, reiniciamos la animación
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(50px)';
                    }
                });
            };
            
            // Función para animar los títulos de sección
            const animateTitles = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Cuando el título entra en la pantalla
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    } else {
                        // Cuando sale, reiniciamos su estado para la próxima vez
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(30px)';
                    }
                });
            };
            
            // Creamos observers específicos para cada tipo de elemento
            const cardObserver = new IntersectionObserver(animateCards, observerOptions);
            const titleObserver = new IntersectionObserver(animateTitles, observerOptions);
            
            // Obtenemos todas las tarjetas de productos y configuramos su estado inicial
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                // Configuración inicial - ocultas y desplazadas hacia abajo
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                // Registramos cada tarjeta para ser observada
                cardObserver.observe(card);
            });
            
            // Obtenemos todos los títulos de sección y configuramos su estado inicial
            const sectionTitles = document.querySelectorAll('.section-title');
            sectionTitles.forEach(title => {
                // Configuración inicial - ocultos y desplazados hacia arriba
                title.style.opacity = '0';
                title.style.transform = 'translateY(30px)';
                title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                // Registramos cada título para ser observado
                titleObserver.observe(title);
            });
            
            /**
             * EFECTOS DE INTERACCIÓN EN BOTONES
             * Añadimos efectos visuales cuando el usuario interactúa con los botones
             * para mejorar la experiencia de usuario y proporcionar feedback visual
             */
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                // Cuando el cursor entra en el botón
                button.addEventListener('mouseenter', function() {
                    // Elevamos ligeramente el botón
                    this.style.transform = 'translateY(-3px)';
                    
                    // Añadimos sombra adecuada según el tipo de botón
                    if (this.classList.contains('btn-primary')) {
                        this.style.boxShadow = '0 5px 15px rgba(140, 110, 93, 0.4)';
                    } else {
                        this.style.boxShadow = '0 5px 15px rgba(140, 110, 93, 0.3)';
                    }
                });
                
                // Cuando el cursor sale del botón
                button.addEventListener('mouseleave', function() {
                    // Regresamos el botón a su estado normal
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
            });
            
            /**
             * ANIMACIÓN DEL FONDO MARRÓN (HERO SECTION)
             * 
             * Animamos el fondo diagonal marrón para que tenga una transición suave
             * al cargar la página y luego un efecto de pulso continuo
             */
            const heroBg = document.querySelector('.hero-bg');
            setTimeout(() => {
                // Detenemos la animación inicial
                heroBg.style.animation = 'none';
                heroBg.style.transform = 'scaleX(1)';
                heroBg.style.opacity = '1';
                
                // Añadimos la animación de pulso continuo
                heroBg.style.animation = 'pulse 5s infinite alternate';
                
                // Definimos la animación de pulso mediante CSS dinámico
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes pulse {
                        from { transform: scaleX(1); }
                        to { transform: scaleX(1.05); }
                    }
                `;
                document.head.appendChild(style);
            }, 1500); // Esperamos 1.5 segundos para permitir que la animación inicial termine
            
        });