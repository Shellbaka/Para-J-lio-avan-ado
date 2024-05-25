// Registro de novo usuário
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".register-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const matricula = document.querySelector('#matricula').value.trim();
        const name = document.querySelector('#name').value.trim();
        const lastname = document.querySelector('#lastname').value.trim();

        if (password.length !== 8) {
            alert('A senha deve conter exatamente 8 caracteres.');
            return;
        }

        if (!/^\d{8}$/.test(matricula)) {
            alert('A matrícula deve conter exatamente 8 caracteres numéricos.');
            return;
        }

        if (!/^[a-zA-Z]+$/.test(name) || !/^[a-zA-Z]+$/.test(lastname)) {
            alert('O nome e o sobrenome devem conter apenas letras.');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const isExistingUser = existingUsers.some(user => user.email === email);

        if (isExistingUser) {
            alert('Este email já está registrado. Por favor, faça login.');
            return;
        }

        const newUser = { email, password, matricula, name, lastname };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        alert('Registro bem-sucedido. Redirecionando para a página de login.');
        window.location.href = '/html/login.html';
    });
});