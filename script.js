// Video modal functionality
function openVideoModal(videoSrc, title, description) {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-modal-player');
    const source = document.getElementById('video-modal-source');
    const modalTitle = document.getElementById('video-modal-title');
    const modalDescription = document.getElementById('video-modal-description');

    source.src = videoSrc;
    player.load();
    player.muted = false;
    player.play().catch(() => {});
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-modal-player');
    player.pause();
    player.currentTime = 0;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}


document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});


const videoModal = document.getElementById('video-modal');
videoModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeVideoModal();
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const inputs = this.querySelectorAll('input, textarea');
    const formData = new FormData(this);
    
    
    this.reset();
    
    
    alert('Thank you for your message! I\'ll get back to you soon.');
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});
