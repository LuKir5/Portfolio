// ------------------------------------------------------------------------- //
// ----- Touchfunktion bei den Projektbildern ----- //
// ------------------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", () => {
  // Selektiere alle Projekte mit den spezifischen Klassen
  const projects = document.querySelectorAll(
    ".project-one, .project-two, .project-three"
  );

  projects.forEach((project) => {
    project.addEventListener("touchstart", () => {
      project.classList.toggle("touched");
    });
  });
});

// ------------------------------------------------------------------------- //
// ----- Funktion Wechsel der Social Media Iconlinks in Contactsection ----- //
// ------------------------------------------------------------------------- //
function changeContactIcons() {
  const icons = [
    {
      src: "assets/icons/github-icon-dunkel.svg",
      link: "https://github.com/LuKir5",
    },
    {
      src: "assets/icons/linkedin-icon-dunkel.svg",
      link: "https://www.linkedin.com/in/lukas-k5/",
    },
    {
      src: "assets/icons/instagram-icon-dunkel.svg",
      link: "https://www.instagram.com/luk_kb/",
    },
  ];

  let index = 0;
  const imgElement = document.getElementById("contact-icons");
  const linkElement = imgElement.parentElement;

  if (!imgElement || !linkElement) {
    console.error("Social Media Icons oder Link-Element nicht gefunden.");
    return;
  }

  setInterval(() => {
    // Bild ausblenden
    imgElement.style.opacity = 0;

    setTimeout(() => {
      // Nächstes Bild setzen
      index = (index + 1) % icons.length;
      imgElement.src = icons[index].src;
      linkElement.href = icons[index].link;

      imgElement.style.opacity = 1; // Bild wieder einblenden
    }, 500); // Warten, bis das Bild vollständig ausgeblendet ist
  }, 3000); // 3 Sekunden Wechselintervall
}
changeContactIcons();

// ----------------------------------------- //
// ----- Funktion für Smooth Scrolling ----- //
// ----------------------------------------- //
document.addEventListener("DOMContentLoaded", () => {
  // Alle Links mit einem `href`-Attribut, das mit `#` beginnt, auswählen
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Verhindert Standardverhalten des Links

      const targetId = this.getAttribute("href").substring(1); // Ziel-ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        smoothScroll(targetElement, 1000); // Ziel und Dauer in Millisekunden
      }
    });
  });

  function smoothScroll(targetElement, duration) {
    const start = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Fortschritt begrenzen (max. 1)

      // Sanfte Ease-Funktion (easeInOutQuad)
      const easing =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const scrollY = start + targetPosition * easing;
      window.scrollTo(0, scrollY);

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }
});

// --------------------------------------------- //
// ----- Initialisierung Animate on Scroll ----- //
// --------------------------------------------- //
AOS.init();
