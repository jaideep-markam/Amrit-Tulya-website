/* =============================================
   AMRITTULYA CHAI — Interactive JavaScript
   ============================================= */

// ===== MENU DATA =====
const menuData = {
  chai: [
    { emoji: "☕", name: "Classic Masala Chai", desc: "Our signature brew — premium tea leaves, fresh milk & a secret spice blend.", price: "₹15", badge: "bestseller" },
    { emoji: "🫚", name: "Ginger Chai", desc: "Bold, warming ginger tea with crushed adrak and a hint of black pepper.", price: "₹15", badge: null },
    { emoji: "🌸", name: "Elaichi Chai", desc: "Delicately fragrant cardamom tea, soothing and aromatic with every sip.", price: "₹15", badge: null },
    { emoji: "🌹", name: "Rose Chai", desc: "Floral rose-infused chai with a light sweetness — a sensory delight.", price: "₹20", badge: "special" },
    { emoji: "🌿", name: "Tulsi Chai", desc: "Holy basil (tulsi) chai — immunity-boosting and refreshingly herbal.", price: "₹18", badge: null },
    { emoji: "🤎", name: "Jaggery Chai", desc: "Sweetened naturally with organic jaggery instead of sugar. Healthier & richer.", price: "₹18", badge: "healthy" },
    { emoji: "⚫", name: "Black Tea", desc: "Pure tea, no milk — strong and clean. Perfect for those who love it raw.", price: "₹12", badge: null },
    { emoji: "🍋", name: "Lemon Tea", desc: "Refreshing lemon-infused tea, light and citrusy. A refreshing pick-me-up.", price: "₹15", badge: null },
  ],
  special: [
    { emoji: "🏺", name: "Kulhad Chai", desc: "Traditional masala chai served in an authentic clay kulhad. Earthy, pure, iconic.", price: "₹20", badge: "bestseller" },
    { emoji: "🌶️", name: "Kadak Masala Chai", desc: "Extra strong, extra spicy. Not for the faint-hearted — for true chai lovers.", price: "₹20", badge: "new" },
    { emoji: "🧄", name: "Kashmiri Kahwa", desc: "Aromatic green tea with saffron, almonds, cinnamon & cardamom. Royal.", price: "₹35", badge: "premium" },
    { emoji: "🧈", name: "Irani Chai", desc: "Rich, creamy Iranian-style chai with a thick layer of cream. Indulgent.", price: "₹30", badge: "special" },
    { emoji: "🍵", name: "Orthodox Green Tea", desc: "Light, clean and full of antioxidants. Pure green tea, minimally processed.", price: "₹25", badge: "healthy" },
    { emoji: "🌺", name: "Hibiscus Infusion", desc: "Ruby red floral tea — caffeine-free, vitamin C rich and beautifully tangy.", price: "₹30", badge: "new" },
  ],
  snacks: [
    { emoji: "🧁", name: "Cream Bun", desc: "Soft, fluffy bun filled with fresh cream. The perfect chai companion.", price: "₹15", badge: null },
    { emoji: "🥐", name: "Cream Roll", desc: "Flaky, buttery pastry rolled with whipped cream. Light and satisfying.", price: "₹20", badge: "bestseller" },
    { emoji: "🍪", name: "Oats Cookies", desc: "Crunchy home-style oat cookies — healthy, wholesome, delicious.", price: "₹10", badge: "healthy" },
    { emoji: "🫓", name: "Bhakarwadi", desc: "Classic Maharashtrian spiral snack — perfectly spiced and crispy.", price: "₹15", badge: null },
    { emoji: "🥜", name: "Roasted Peanuts", desc: "Lightly salted and freshly roasted peanuts. Simple, crunchy, addictive.", price: "₹10", badge: null },
    { emoji: "🍞", name: "Butter Toast", desc: "Golden crispy toast with a generous spread of butter. Warm & comforting.", price: "₹20", badge: null },
  ],
};

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const allNavLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  updateActiveNavLink();
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  let currentSection = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      currentSection = sec.getAttribute("id");
    }
  });
  allNavLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// ===== RENDER MENU ITEMS =====
function renderMenu(tab) {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";
  menuData[tab].forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.style.animationDelay = `${i * 60}ms`;
    const emojiSpan = document.createElement("span");
    emojiSpan.className = "menu-emoji";
    emojiSpan.textContent = item.emoji;
    card.appendChild(emojiSpan);

    if (item.badge) {
      const badgeSpan = document.createElement("span");
      badgeSpan.className = `menu-badge ${item.badge}`;
      badgeSpan.textContent = item.badge;
      card.appendChild(badgeSpan);
    }

    const nameDiv = document.createElement("div");
    nameDiv.className = "menu-name";
    nameDiv.textContent = item.name;
    card.appendChild(nameDiv);

    const descDiv = document.createElement("div");
    descDiv.className = "menu-desc";
    descDiv.textContent = item.desc;
    card.appendChild(descDiv);

    const priceDiv = document.createElement("div");
    priceDiv.className = "menu-price";
    priceDiv.textContent = item.price;
    card.appendChild(priceDiv);
    grid.appendChild(card);
  });
}

// ===== MENU TABS =====
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.tab);
  });
});

// Initial render
renderMenu("chai");

// ===== TESTIMONIALS SLIDER =====
const track = document.getElementById("testimonialsTrack");
const dotsContainer = document.getElementById("testimonialDots");
const cards = track.querySelectorAll(".testimonial-card");
let currentSlide = 0;

// Create dots
cards.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = `dot ${i === 0 ? "active" : ""}`;
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function getVisibleCount() {
  return window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
}

function goToSlide(index) {
  const visibleCount = getVisibleCount();
  const maxSlide = Math.max(0, cards.length - visibleCount);
  currentSlide = Math.min(index, maxSlide);

  // Shift testimonial cards
  cards.forEach((card, i) => {
    card.style.transform = `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 28}px))`;
  });

  // Update dots
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

// Auto slide testimonials
let testimonialTimer = setInterval(() => {
  const visibleCount = getVisibleCount();
  const maxSlide = Math.max(0, cards.length - visibleCount);
  goToSlide(currentSlide >= maxSlide ? 0 : currentSlide + 1);
}, 4000);

track.addEventListener("mouseenter", () => clearInterval(testimonialTimer));
track.addEventListener("mouseleave", () => {
  testimonialTimer = setInterval(() => {
    const visibleCount = getVisibleCount();
    const maxSlide = Math.max(0, cards.length - visibleCount);
    goToSlide(currentSlide >= maxSlide ? 0 : currentSlide + 1);
  }, 4000);
});

// ===== INTERSECTION OBSERVER — AOS =====
const aosElements = document.querySelectorAll("[data-aos]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add("aos-visible");
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

aosElements.forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ===== COUNTER ANIMATION FOR HERO STATS =====
function animateCounter(el, end, duration = 1800) {
  let start = 0;
  const step = end / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= end) { start = end; clearInterval(timer); }
    el.textContent = Math.floor(start) + (el.dataset.suffix || "");
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEls = entry.target.querySelectorAll(".stat-num");
      numEls.forEach(el => {
        const val = parseInt(el.textContent);
        const suffix = el.textContent.replace(/[0-9]/g, "");
        el.dataset.suffix = suffix;
        animateCounter(el, val);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObserver.observe(heroStats);

// ===== GALLERY LIGHTBOX (simple) =====
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (!img) return;

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;
      display:flex;align-items:center;justify-content:center;cursor:zoom-out;
      animation:fadeInDown 0.3s ease;
    `;
    const lightImg = document.createElement("img");
    lightImg.src = img.src;
    lightImg.style.cssText = "max-width:90vw;max-height:90vh;border-radius:16px;box-shadow:0 20px 80px rgba(0,0,0,0.8);object-fit:contain;";
    overlay.appendChild(lightImg);
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    overlay.addEventListener("click", () => {
      overlay.remove();
      document.body.style.overflow = "";
    });
  });
});

// ===== FEATURE CARDS STAGGER ANIMATION =====
const featureCards = document.querySelectorAll(".feature-card");
const featureObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, parseInt(entry.target.dataset.delay || 0));
      featureObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

featureCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  featureObserver.observe(card);
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });
});

// ===== MENU ITEM HOVER TILT =====
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".menu-item").forEach(card => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 0.7) {
      card.style.transform = `perspective(800px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) translateY(-4px)`;
    }
  });
});

document.querySelectorAll(".menu-item").forEach(card => {
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

console.log("☕ Amrittulya Chai — Website Loaded Successfully!");
