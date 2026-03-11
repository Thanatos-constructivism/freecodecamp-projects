const images = document.querySelectorAll('#work figure img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
  img.addEventListener('click', (e) => {
    e.preventDefault();     
    e.stopPropagation();    
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});