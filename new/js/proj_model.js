function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';

        // Lazy load images in the modal
        const images = modal.querySelectorAll('img[data-src]');
        images.forEach(img => {
            const fullSrc = img.getAttribute('data-src');
            if (fullSrc) {
                img.setAttribute('src', fullSrc);
                img.removeAttribute('data-src'); // Remove to avoid reloading
            }
        });
    }
}

// Optional: Close modal when clicking outside of the content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.custom-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
