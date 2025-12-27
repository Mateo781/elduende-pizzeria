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
                }
            });
        });

        // Estado del local (cambiar estos valores según necesites)
        const isOpen = true; // Cambiar a false para cerrado
        const statusDot = document.getElementById('statusDot');
        const statusText = document.getElementById('statusText');

        if (!isOpen) {
            statusDot.classList.add('closed');
            statusText.textContent = 'Cerrado';
        }