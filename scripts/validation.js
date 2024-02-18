document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('password2');
    const passwordError = document.getElementById('passwordError');

    confirmPassword.addEventListener('blur', function() {
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            // Show error message
            passwordError.style.display = 'block';
            confirmPassword.setCustomValidity('Passwords do not match.'); // Prevent form submission
        } else {
            // Hide error message and clear any set custom validity
            passwordError.style.display = 'none';
            confirmPassword.setCustomValidity(''); // Allow form submission
        }
    });
});
