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


function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'RESUME/SalamanesAlexisJude_Resume.pdf';
    link.download = 'SalamanesAlexisJude_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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


const resumeModal = document.getElementById('resume-modal');
resumeModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeResumeModal();
    }
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeVideoModal();
        closeResumeModal();
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


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted!');

        const formData = new FormData(this);
        const templateParams = {
            from_name: formData.get('user_name'),
            from_email: formData.get('user_email'),
            message: formData.get('message'),
            to_email: 'salamanes.alexisjudebsemc2023@gmail.com'
        };

        console.log('Sending EmailJS request', templateParams);

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_id: 'service_ei0wno1',
                template_id: 'template_exni9if',
                user_id: 'LTLuU9XfvH-7__Rd3',
                template_params: templateParams
            })
        })
        .then(function(response) {
            return response.text().then(function(bodyText) {
                console.log('EmailJS response status:', response.status, response.statusText);
                console.log('EmailJS response body:', bodyText);
                contactForm.reset();
                alert('Thank you for your message! I\'ll get back to you soon.');
            });
        })
        .catch(function(error) {
            console.error('Failed to send email:', error);
            alert('There was an error sending your message. Please try again or contact directly at salamanes.alexisjudebsemc2023@gmail.com');
        });
    });
}


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
