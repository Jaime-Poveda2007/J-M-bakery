        // Script for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Set default dates
            const today = new Date();
            const tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            
            // Format dates as YYYY-MM-DD for the input fields
            const formatDate = (date) => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            };
            
            // Set default values for date inputs
            document.getElementById('fecha-pedido').value = formatDate(today);
            document.getElementById('fecha-entrega').value = formatDate(tomorrow);
            
            // Progress step animation
            let steps = document.querySelectorAll('.step-icon');
            let currentStep = 1;
            
            // Animation to update the progress steps
            function updateProgress() {
                if (currentStep < steps.length) {
                    setTimeout(() => {
                        steps[currentStep].classList.add('active');
                        currentStep++;
                        updateProgress();
                    }, 3000);
                }
            }
            
            // Start progress animation after 2 seconds
            setTimeout(updateProgress, 2000);
            
            // Form submission handling
            document.querySelector('form').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                const formData = {
                    nombre: document.getElementById('nombre').value,
                    apellido: document.getElementById('apellido').value,
                    fechaPedido: document.getElementById('fecha-pedido').value,
                    fechaEntrega: document.getElementById('fecha-entrega').value,
                    ubicacion: document.getElementById('ubicacion').value,
                    metodoPago: document.getElementById('payment').value
                };
                
                // You could send this data to a server or process it
                console.log('Datos del pedido:', formData);
                
                // Show confirmation
                alert('¡Pedido confirmado! Gracias por tu compra.');
            });
        });