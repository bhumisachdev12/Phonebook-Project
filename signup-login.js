document.getElementById('login-tab').addEventListener('click', function() {
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
    document.getElementById('login-tab').classList.remove('inactive');
    document.getElementById('signup-tab').classList.add('inactive');
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
});

document.getElementById('signup-tab').addEventListener('click', function() {
    document.getElementById('signup-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('signup-tab').classList.remove('inactive');
    document.getElementById('login-tab').classList.add('inactive');
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }});