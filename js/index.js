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
            window.open('https://www.google.com/maps/place/El+Duende+-+Pizzería+y+Casa+de+Comidas/@-34.5084373,-58.5739057,3a,75y,174.09h,82.25t/data=!3m7!1e1!3m5!1szukc6uuzZeMHej5MdKp05Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.753381294935949%26panoid%3Dzukc6uuzZeMHej5MdKp05Q%26yaw%3D174.0862870656139!7i16384!8i8192!4m14!1m7!3m6!1s0x95bcba8b9b44dfb3:0xa2039dcdf66dcbd6!2sEl+Duende+-+Pizzería+y+Casa+de+Comidas!8m2!3d-34.5086161!4d-58.5739454!16s%2Fg%2F11by_crnj8!3m5!1s0x95bcba8b9b44dfb3:0xa2039dcdf66dcbd6!8m2!3d-34.5086161!4d-58.5739454!16s%2Fg%2F11by_crnj8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
        });

        // Botón menú completo (aquí puedes agregar la funcionalidad que necesites)
        const btnFullMenu = document.getElementById('btnFullMenu');
        btnFullMenu.addEventListener('click', () => {
            // Aquí irá la lógica para mostrar el menú completo
            alert('Aquí se mostrará el menú completo - Por implementar');
        });