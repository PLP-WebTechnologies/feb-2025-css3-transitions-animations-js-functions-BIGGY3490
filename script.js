// Retrieve name from localStorage on load
window.onload = function () {
  const savedName = localStorage.getItem('username');
  if (savedName) {
    document.getElementById('usernameDisplay').textContent = savedName;
  }
};

// Save username to localStorage
document.getElementById('saveBtn').addEventListener('click', () => {
  const name = document.getElementById('username').value;
  if (name) {
    localStorage.setItem('username', name);
    document.getElementById('usernameDisplay').textContent = name;
  }
});

// Animate the box on button click
document.getElementById('animateBtn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.classList.remove('animate'); // reset animation
  void box.offsetWidth; // trigger reflow
  box.classList.add('animate');
});
