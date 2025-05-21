        // Definir las rutas de las imágenes de postres
        // Estos nombres deben coincidir exactamente con los archivos en la carpeta img/
        const dessertImages = {
            // Tartas
            'tarta_fresa_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\tarta_fresa.jpg',
            'tarta_fresa_chocolate_ninguno': 'c:\Users\josga\proyectoPasteleria\img\tarta_fresa_chocolate.jpg',
            'tarta_fresa_ninguno_fresas': '',
            'tarta_chocolate_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\tarta_chocolate.jpg',
            'tarta_chocolate_caramelo_ninguno': 'c:\Users\josga\proyectoPasteleria\img\tarta_chocolate_caramelo.jpg',
            'tarta_vainilla_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\tarta_vainilla.jpg',
            'tarta_vainilla_chocolate_ninguno': 'c:\Users\josga\proyectoPasteleria\img\tarta_vainilla_chocolate.jpeg',
            
            // Milhojas
            'milhojas_vainilla_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\milhojas_vainilla.jpg',
            'milhojas_fresa_ninguno_fresas': 'c:\Users\josga\proyectoPasteleria\img\cheesecake_fresa_fresas.jpg',
            'milhojas_chocolate_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\milhojas_chocolate.jpg',
            
            // Brownies
            'brownie_chocolate_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\brownie_chocolate.jpg',
            'brownie_chocolate_chocolate_nueces': 'c:\Users\josga\proyectoPasteleria\img\brownie_chocolate_chocolate_nueces.jpg',
            'brownie_chocolate_caramelo_ninguno': 'c:\Users\josga\proyectoPasteleria\img\brownie_chocolate__caramelo.jpg',
            
            // Cheesecakes
            'cheesecake_fresa_ninguno_fresas': 'c:\Users\josga\proyectoPasteleria\img\cheesecake_fresa_fresas.jpg',
            'cheesecake_vainilla_caramelo_ninguno': 'c:\Users\josga\proyectoPasteleria\img\cheesecake_vainilla_caramelo.jpg',
            'cheesecake_limon_ninguno_ninguno': 'c:\Users\josga\proyectoPasteleria\img\cheesecake_limon.jpg',
            
            // Imagen predeterminada
            'default': 'c:\Users\josga\proyectoPasteleria\img\default.jpg'
        };
        
        // Función para actualizar la imagen del postre según las selecciones
        function updateDessertImage() {
            // Obtener los valores seleccionados
            const tipoPostre = document.getElementById('tipoPostreSelect').value || 'default';
            const sabor = document.getElementById('saborSelect').value || 'default';
            const glaceado = document.getElementById('glaceadoSelect').value || 'ninguno';
            const topping = document.getElementById('toppingsSelect').value || 'ninguno';
            
            // Crear una clave para buscar en el objeto de imágenes
            const imageKey = `${tipoPostre}_${sabor}_${glaceado}_${topping}`;
            
            // Buscar la imagen específica o usar alternativas si no existe
            let imageUrl = dessertImages[imageKey];
            
            if (!imageUrl) {
                // Si no existe la combinación exacta, intentar con combinaciones más generales
                imageUrl = dessertImages[`${tipoPostre}_${sabor}_${glaceado}_ninguno`] || 
                        dessertImages[`${tipoPostre}_${sabor}_ninguno_ninguno`] || 
                        dessertImages['default'];
            }
            
            // Obtener el elemento de imagen
            const dessertImage = document.getElementById('dessertImage');
            
            // Aplicar efecto de transición
            dessertImage.classList.remove('fade-in');
            dessertImage.classList.add('fade-out');
            
            // Cambiar la imagen después de un breve retraso (para que se vea la transición)
            setTimeout(() => {
                dessertImage.src = imageUrl;
                dessertImage.classList.remove('fade-out');
                dessertImage.classList.add('fade-in');
            }, 500);
        }
        
        // Cuando se carga la página, configurar todo
        window.addEventListener('DOMContentLoaded', function() {
            // Establecer la imagen predeterminada
            document.getElementById('dessertImage').src = dessertImages['default'];
            
            // Agregar listeners para detectar cambios en los selectores
            document.getElementById('saborSelect').addEventListener('change', updateDessertImage);
            document.getElementById('glaceadoSelect').addEventListener('change', updateDessertImage);
            document.getElementById('toppingsSelect').addEventListener('change', updateDessertImage);
            document.getElementById('tipoPostreSelect').addEventListener('change', updateDessertImage);
            document.getElementById('tamanoSelect').addEventListener('change', updateDessertImage);
        });