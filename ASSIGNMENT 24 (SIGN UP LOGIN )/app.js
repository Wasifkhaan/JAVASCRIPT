function showSignup() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

function showLogin() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        Swal.fire('Success', 'Signup successful!', 'success');
        showLogin();
    } else {
        Swal.fire('Error', 'Please fill in all fields.', 'error');
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        Swal.fire('Success', 'Login successful!', 'success');
    } else {
        Swal.fire('Error', 'Invalid email or password.', 'error');
    }
}
