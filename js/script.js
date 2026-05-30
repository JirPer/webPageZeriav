const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".flip-card").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

});