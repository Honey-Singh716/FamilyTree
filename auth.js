// Authentication System for Family Tree App

// Admin credentials (CHANGE THESE BEFORE DEPLOYING)
const ADMIN_CREDENTIALS = {
    email: "admin@honey.com",
    password: "StrongPassword123" // Change to a strong password
};

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const authContainer = document.getElementById('auth-container');
    const appContainer = document.getElementById('app-container');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showSignin = document.getElementById('show-signin');
    const signinBtn = document.getElementById('signin-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Admin elements
    const adminModal = document.getElementById('admin-modal');
    const showAdminModal = document.getElementById('show-admin-modal');
    const closeModal = document.querySelector('.close-modal');
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminDashboard = document.getElementById('admin-dashboard');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');
    const usersTable = document.getElementById('users-table').querySelector('tbody');

    // Initialize the app state
    checkAuthState();

    // ========================
    // USER AUTHENTICATION
    // ========================

    // Toggle between sign in and sign up forms
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showSignin.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
    });

    // User sign up
    signupBtn.addEventListener('click', function() {
        const name = document.getElementById('signup-name').value.trim();
        const phone = document.getElementById('signup-phone').value.trim();
        const email = document.getElementById('signup-email').value.trim().toLowerCase();
        const password = document.getElementById('signup-password').value;

        if (!name || !phone || !email || !password) {
            alert('Please fill all fields');
            return;
        }

        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Get existing users or create empty array
        const users = JSON.parse(localStorage.getItem('familyTreeUsers')) || [];

        // Check if user already exists
        if (users.some(user => user.email === email)) {
            alert('User with this email already exists');
            return;
        }

        // Add new user (in production, you would hash the password!)
        users.push({
            name,
            phone,
            email,
            password, // WARNING: In production, NEVER store plain text passwords
            signupDate: new Date().toISOString()
        });

        localStorage.setItem('familyTreeUsers', JSON.stringify(users));
        localStorage.setItem('loggedInUser', email);
        showApp();
        alert('Account created successfully!');
    });

    // User sign in
    signinBtn.addEventListener('click', function() {
        const email = document.getElementById('signin-email').value.trim().toLowerCase();
        const password = document.getElementById('signin-password').value;

        if (!email || !password) {
            alert('Please fill all fields');
            return;
        }

        const users = JSON.parse(localStorage.getItem('familyTreeUsers')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', email);
            showApp();
        } else {
            alert('Invalid email or password');
        }
    });

    // User logout
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        showAuth();
    });

    // ========================
    // ADMIN AUTHENTICATION
    // ========================

    // Show admin modal
    showAdminModal.addEventListener('click', function(e) {
        e.preventDefault();
        adminModal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
    });

    // Admin login
    adminLoginBtn.addEventListener('click', function() {
        const email = document.getElementById('admin-email').value.trim();
        const password = document.getElementById('admin-password').value;

        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            adminModal.style.display = 'none';
            showAdminDashboard();
            sessionStorage.setItem('isAdmin', 'true');
        } else {
            alert('Invalid admin credentials');
        }
    });

    // Admin logout
    adminLogoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('isAdmin');
        adminDashboard.style.display = 'none';
        showAuth();
    });

    // ========================
    // HELPER FUNCTIONS
    // ========================

    function checkAuthState() {
        if (sessionStorage.getItem('isAdmin') === 'true') {
            showAdminDashboard();
        } else if (localStorage.getItem('loggedInUser')) {
            showApp();
        } else {
            showAuth();
        }
    }

    function showApp() {
        authContainer.style.display = 'none';
        appContainer.style.display = 'block';
        adminDashboard.style.display = 'none';
    }

    function showAuth() {
        authContainer.style.display = 'block';
        appContainer.style.display = 'none';
        adminDashboard.style.display = 'none';
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        
        // Clear form fields
        document.getElementById('signin-email').value = '';
        document.getElementById('signin-password').value = '';
        document.getElementById('signup-name').value = '';
        document.getElementById('signup-phone').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
    }

    function showAdminDashboard() {
        authContainer.style.display = 'none';
        appContainer.style.display = 'none';
        adminDashboard.style.display = 'block';
        loadUsers();
    }

    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('familyTreeUsers')) || [];
        usersTable.innerHTML = '';

        if (users.length === 0) {
            usersTable.innerHTML = '<tr><td colspan="4">No users found</td></tr>';
            return;
        }

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${new Date(user.signupDate).toLocaleDateString()}</td>
            `;
            usersTable.appendChild(row);
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === adminModal) {
            adminModal.style.display = 'none';
        }
    });
});