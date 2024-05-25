document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const matricula = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = existingUsers.find(user => user.matricula === matricula && user.password === password);

        if (validUser) {
            alert('Login bem-sucedido. Redirecionando para o menu.');
            // Armazenar dados do usuário atual para uso posterior
            localStorage.setItem('currentUser', JSON.stringify(validUser));
            window.location.href = '/html/menu.html';
        } else {
            alert('Matrícula ou senha incorretos. Tente novamente.');
        }
    });
});