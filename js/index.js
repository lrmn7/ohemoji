const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Nav
function scrollHeader() {
  const header = document.querySelector('.nav')
  if (this.scrollY >= 40) {
    header.classList.add('fix-nav')
  } else header.classList.remove('fix-nav')
}
window.addEventListener('scroll', scrollHeader)

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// ======================= SCROLL INDICATOR ========================

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}

// SWIPER JS
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


// GSAP ANIMATION
gsap.from('.left h2, .left h1, .left small, .left strong, .left a', {opacity: 0, duration: 2, delay: .4, y:25, ease:'expo.out', stagger:.2})

// gsap.from('.logo, .open-btn', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
// gsap.from('.nav-list li', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger:.2})
gsap.from('.btn', {opacity: 0, duration: 2, delay:.6, y:25, ease:'expo.out', stagger:.2})