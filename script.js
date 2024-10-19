document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const subscriptionForm = document.getElementById('subscription-form');
    const loginForm = document.getElementById('login-form');

    // Simular registro y redirigir a panel de control
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Guardar datos de usuario en localStorage (simulando base de datos)
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Usuario registrado exitosamente!');
            window.location.href = 'login.html'; // Redirigir a iniciar sesión
        });
    }

    // Simular inicio de sesión
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const loginEmail = document.getElementById('login-email').value;
            const loginPassword = document.getElementById('login-password').value;

            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert('Inicio de sesión exitoso!');
                window.location.href = 'dashboard.html'; // Redirigir al panel de control
            } else {
                alert('Credenciales incorrectas. Inténtalo de nuevo.');
            }
        });
    }

    // Simular suscripción y actualizar el panel de control
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const subscriptionType = document.querySelector('input[name="subscription_type"]:checked').value;
            const startDate = new Date().toLocaleDateString();
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + (subscriptionType === '15_days' ? 15 : 30));
            
            // Almacenar en localStorage (simulando base de datos)
            localStorage.setItem('subscriptionType', subscriptionType);
            localStorage.setItem('startDate', startDate);
            localStorage.setItem('endDate', endDate.toLocaleDateString());
            
            alert('Suscripción exitosa!');
            window.location.href = 'dashboard.html'; // Redirigir al panel de control
        });
    }

    // Mostrar información de suscripción en el panel de control
    if (document.getElementById('subscription-info')) {
        const subscriptionType = localStorage.getItem('subscriptionType') || 'Ninguna';
        const startDate = localStorage.getItem('startDate') || 'N/A';
        const endDate = localStorage.getItem('endDate') || 'N/A';
        const username = localStorage.getItem('username') || 'Usuario';

        document.getElementById('subscription-type').textContent = subscriptionType;
        document.getElementById('start-date').textContent = startDate;
        document.getElementById('end-date').textContent = endDate;
        document.getElementById('username-display').textContent = username;
    }
});
