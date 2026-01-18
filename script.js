
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Agar tum chahte ho ki ek hi baar animate ho:
        // observer.unobserve(entry.target);
      } else {
        // Agar tum repeatable chahte ho (upar scroll karte hi hide ho):
        // entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.12 // 10% visible hote hi trigger
  });

  document.querySelectorAll('.nxt, .mt1, .mt2, .cl1, .aj1, .aj2, .ma1, .ud1, .port, .port1, .micro').forEach(el => observer.observe(el));
});


function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const anima = document.querySelector(".anima");
  const items = document.querySelectorAll(".item");

  if (!anima || items.length === 0) return; // nothing to do if elements missing

  anima.addEventListener("mousemove", (e) => {
    const rect = anima.getBoundingClientRect();

    const x = e.clientX - rect.left;   // mouse X inside div
    const y = e.clientY - rect.top;    // mouse Y inside div

    const centerX = rect.width / 60;
    const centerY = rect.height / 60;

    const moveX = (x - centerX) / 80;
    const moveY = (y - centerY) / 70;

    items.forEach((item, index) => {
      const factor = (index + 1) * 3;
      item.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
  });

  anima.addEventListener("mouseleave", () => {
    items.forEach(item => {
      item.style.transform = "translate(${moveX * factor}px, ${moveY * factor}px)";
    });
  });
});
// ...existing code...


function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

