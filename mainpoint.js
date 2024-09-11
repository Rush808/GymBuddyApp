const navbar = document.getElementById('navbar');
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (e) => {
  navbar.style.backgroundColor = e.target.value;
});