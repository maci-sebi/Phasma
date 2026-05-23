const visibleImage = document.querySelector('.map-image');
const hiddenImages = document.querySelectorAll('.hidden-images img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');

// Kombinace viditelného obrázku a skrytých obrázků
const allImages = [visibleImage, ...hiddenImages];
let currentIndex = 0;

// Otevření modalu s vybraným obrázkem
visibleImage.addEventListener('click', () => {
    currentIndex = 0; // Viditelný obrázek je první
    modalImage.src = allImages[currentIndex].src;
    modal.style.display = 'flex';
});

// Zavření modalu
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Přepnutí na předchozí obrázek
prevImage.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    modalImage.src = allImages[currentIndex].src;
});

// Přepnutí na další obrázek
nextImage.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allImages.length;
    modalImage.src = allImages[currentIndex].src;
});

// Zavření modalu při kliknutí mimo obrázek
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
