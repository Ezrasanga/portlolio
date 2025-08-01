document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm'); 
    const notification = document.getElementById('notification');

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log("Form submitted:", data);

        form.reset();

        // Show notification
        notification.classList.remove('hidden');
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 300); // Wait for fade-out animation
        }, 3000);
    });
});
