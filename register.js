// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDojm8pKxG7VkNIexMgwXcOLgR9NvglXb4",
    authDomain: "udyog-prabha.firebaseapp.com",
    projectId: "udyog-prabha",
    storageBucket: "udyog-prabha.firebasestorage.app",
    messagingSenderId: "782065175132",
    appId: "1:782065175132:web:b07979398c85d4bad0f499",
    measurementId: "G-CJQ04K7NDR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Register Function
document.getElementById('register-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Passwords do not match!";
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to Login page after successful registration
            window.location.href = 'login.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('error-message').textContent = errorMessage;
        });
});
