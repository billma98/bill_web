
function closeModal(modalId) {
    // Select the modal
    const modal = document.getElementById(modalId);
    if (modal) {
        // Hide the modal
        modal.style.display = 'none';

    // Stop all videos inside the modal
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause(); // Pause the video
            video.currentTime = 0; // Reset to the start
        });
    }
}


