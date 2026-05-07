// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDojm8pKxG7VkNIexMgwXcOLgR9NvglXb4",
  authDomain: "udyog-prabha.firebaseapp.com",
  projectId: "udyog-prabha",
  storageBucket: "udyog-prabha.appspot.com",  // Corrected storageBucket
  messagingSenderId: "782065175132",
  appId: "1:782065175132:web:b07979398c85d4bad0f499"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const status = document.getElementById("loginStatus");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      status.textContent = "Login successful!";
      status.classList.replace("text-red-500", "text-green-600");
    })
    .catch((error) => {
      status.textContent = error.message;
    });
}

// Mobile Nav Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("hidden");
});
