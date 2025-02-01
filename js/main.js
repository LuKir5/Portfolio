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

// // ------------------------------------------------------------------------- //
// // ----- Funktion Wechsel der Social Media Iconlinks in Contactsection ----- //
// // ------------------------------------------------------------------------- //
// let colorChangeComplete = false; // Zustand Farbwechsel

// window.addEventListener('scroll', () => { // Scroll-Event: Farbwechsel basierend auf dem Scrollen
//   const scrollThresholdStart = window.innerHeight * 0.05;
//   const scrollThresholdEnd = window.innerHeight;

//   const blendFactor = Math.min( // Berechne den Blend-Faktor basierend auf dem Scroll-Bereich
//     Math.max((window.scrollY - scrollThresholdStart) / (scrollThresholdEnd - scrollThresholdStart), 0),
//     1
//   );

//   // Aktualisiere CSS-Variablen für den Farbwechsel
//   document.documentElement.style.setProperty('--blend-factor', blendFactor);
//   document.documentElement.style.setProperty('--background-opacity', 1 - blendFactor); // Bild ausblenden

//   // Dynamisch interpolierte Farben
//   const color1 = interpolateColor('#f2f2f2', '#060317', blendFactor);
//   const color2 = interpolateColor('#060317', '#f2f2f2', blendFactor);

//   document.documentElement.style.setProperty('--color-1', color1);
//   document.documentElement.style.setProperty('--color-2', color2);

//   if (blendFactor === 1) { // Prüfen, ob der Farbwechsel abgeschlossen ist
//     colorChangeComplete = true;
//     activateFadeIn();
//     showContainer(); // Funktionen starten
//   }
// });

// /**
//  * Interpoliert zwei Farben
//  * @param {string} color1 - Startfarbe im Hex-Format
//  * @param {string} color2 - Endfarbe im Hex-Format
//  * @param {number} factor - Interpolationsfaktor (0 bis 1)
//  * @returns {string} - Interpolierte Farbe im Hex-Format
//  */
// function interpolateColor(color1, color2, factor) {
//   const hexToRgb = (hex) =>
//     hex
//       .replace(/^#/, '')
//       .match(/.{2}/g)
//       .map((val) => parseInt(val, 16));

//   const rgbToHex = (r, g, b) =>
//     `#${[r, g, b]
//       .map((val) => val.toString(16).padStart(2, '0'))
//       .join('')}`;

//   const [r1, g1, b1] = hexToRgb(color1);
//   const [r2, g2, b2] = hexToRgb(color2);

//   const r = Math.round(r1 + factor * (r2 - r1));
//   const g = Math.round(g1 + factor * (g2 - g1));
//   const b = Math.round(b1 + factor * (b2 - b1));

//   return rgbToHex(r, g, b);
// }

// function activateFadeIn() { // Aktiviert die FadeIn-Animation, nachdem der Farbwechsel abgeschlossen ist
//   if (!colorChangeComplete) return; // Warten bis Farbwechsel abgeschlossen

//   const elements = document.querySelectorAll(".fadeIn");

//   const observerOptions = {
//     root: null,           // Beobachtung im gesamten Viewport
//     threshold: 0.66       // 2/3 des Elements müssen sichtbar sein
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) { // Element ist sichtbar
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target); // Beobachtung nach Sichtbarkeit beenden
//       }
//     });
//   }, observerOptions);

//   elements.forEach(el => observer.observe(el));
// }

// function showContainer() { // Macht den Container sichtbar, nachdem der Farbwechsel abgeschlossen ist
//   const aboutcontainer = document.querySelector(".about-container");
//   const projectscontainer = document.querySelector(".projects-container");
//   const contactcontainer = document.querySelector(".contact-container");

//   if (aboutcontainer) {
//     aboutcontainer.classList.add("blendIn"); // Fügt Klasse blendIn hinzu
//   }
//   if (projectscontainer) { // Beobachter für den projectscontainer erstellen
//     const observerOptions = {
//       root: null, // Beobachtung im Viewport
//       threshold: 0.33, // 1/3 des Elements muss sichtbar sein
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("blendIn"); // Klasse hinzufügen
//           observer.unobserve(entry.target); // Beobachtung beenden
//         }
//       });
//     }, observerOptions);

//     observer.observe(projectscontainer); // Beobachtung starten
//   }
//   if (contactcontainer) { // Beobachter für den projectscontainer erstellen
//     const observerOptions = {
//       root: null, // Beobachtung im gesamten Viewport
//       threshold: 1, // Element muss vollständig sichtbar sein
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("blendIn"); // Klasse hinzufügen
//           observer.unobserve(entry.target); // Beobachtung beenden
//         }
//       });
//     }, observerOptions);

//     observer.observe(contactcontainer); // Beobachtung starten
//   }
// }

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

AOS.init();
