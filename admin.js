// script.js
const auth = firebase.auth();

const loginPanel = document.getElementById('login-panel');
const adminPanel = document.getElementById('admin-panel');
const errorMsg = document.getElementById('error-msg');

document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      loginPanel.classList.add('hidden');
      adminPanel.classList.remove('hidden');
    })
    .catch(() => {
      errorMsg.classList.remove('hidden');
    });
});

document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut().then(() => {
    loginPanel.classList.remove('hidden');
    adminPanel.classList.add('hidden');
  });
});

// Auto-check if already logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    loginPanel.classList.add('hidden');
    adminPanel.classList.remove('hidden');
  } else {
    loginPanel.classList.remove('hidden');
    adminPanel.classList.add('hidden');
  }
});
