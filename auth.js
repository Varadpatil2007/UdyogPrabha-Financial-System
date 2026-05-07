const auth = firebase.auth();

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Login successful!');
      // You can redirect or show dashboard here
    })
    .catch(err => {
      alert('Login failed: ' + err.message);
    });
});
