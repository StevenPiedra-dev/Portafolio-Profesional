// Inserta el footer dinámicamente
fetch('../../pages/footer/footer.html')
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  })
  .catch(err => console.error('Error loading footer:', err));