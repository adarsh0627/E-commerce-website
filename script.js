const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errors = [];

    // Username validation
    if (username.length < 3) {
        errors.push('Username must be at least 3 characters long.');
    }

    // Email validation (basic pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    // Password validation
    if (password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    // Display errors if any
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        // Submit the form if no errors
        document.getElementById('myForm').submit();
    }
});





