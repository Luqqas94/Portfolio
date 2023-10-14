document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }

    function updateNavLinks() {
        const viewportHeight = window.innerHeight;

        sections.forEach(function(section) {
            if (isInViewport(section, viewportHeight)) {
                section.classList.remove("transparent");
            } else {
                section.classList.add("transparent");
            }
        });
    }

    function isInViewport(element, viewportHeight) {
        const rect = element.getBoundingClientRect();
        return rect.top < viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
    }

    window.addEventListener("scroll", updateNavLinks);
});


const button = document.getElementById('myButton');

button.addEventListener('focus', () => {
  button.classList.add('focused');
});

button.addEventListener('blur', () => {
  button.classList.remove('focused');
});