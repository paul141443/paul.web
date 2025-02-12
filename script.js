function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Both fields are required.');
        return false;
    }

    // Simulate a login process
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        return true;
    } else {
        alert('Invalid email or password.');
        return false;
    }
}
