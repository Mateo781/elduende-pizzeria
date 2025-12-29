// Scroll suave a las secciones
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });

        // Header transparente que cambia al hacer scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Estado del local (cambiar estos valores según necesites)
        const isOpen = true; // Cambiar a false para cerrado
        const statusDot = document.getElementById('statusDot');
        const statusText = document.getElementById('statusText');

        if (!isOpen) {
            statusDot.classList.add('closed');
            statusText.textContent = 'Cerrado';
        }

        // Menú móvil toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Botón Google Maps (aquí puedes agregar tu URL de Google Maps)
        const btnMaps = document.getElementById('btnMaps');
        btnMaps.addEventListener('click', (e) => {
            e.preventDefault();
            // Reemplaza esta URL con la de tu local en Google Maps
            window.open('https://maps.google.com/?q=Tu+Direccion+Aqui', '_blank');
        });

        // Botón menú completo (aquí puedes agregar la funcionalidad que necesites)
        const btnFullMenu = document.getElementById('btnFullMenu');
        btnFullMenu.addEventListener('click', () => {
            // Aquí irá la lógica para mostrar el menú completo
            alert('Aquí se mostrará el menú completo - Por implementar');
        });