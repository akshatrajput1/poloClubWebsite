gsap.registerPlugin(ScrollTrigger);

const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

if (window.innerWidth > 768) {
  document.addEventListener("mousemove", function (e) {
    crsr.style.left = e.clientX + "px";
    crsr.style.top = e.clientY + "px";
    blur.style.left = e.clientX - 200 + "px";
    blur.style.top = e.clientY - 200 + "px";
  });
}

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

if (window.innerWidth > 768) {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 500,
    glare: true,
    "max-glare": 0.25,
    scale: 1.05,
    perspective: 1200,
  });
}

const mainSlider = new Swiper(".main-slider", {
  direction: window.innerWidth < 900 ? "horizontal" : "vertical",
  speed: 1100,
  mousewheel: {
    releaseOnEdges: true,
  },
  touchRatio: 1,
  simulateTouch: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  controller: {
    control: null,
  },
  loop: true,
});

const innerSlider = new Swiper(".inner-slider", {
  speed: 700,
  effect: "creative",
  watchSlidesProgress: true,
  creativeEffect: {
    prev: {
      translate: [0, 0, -1],
    },
    next: {
      translate: [0, "110%", 0],
    },
  },
  controller: {
    control: null,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
});

mainSlider.controller.control = innerSlider;
innerSlider.controller.control = mainSlider;

gsap.from(".gallery-item", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 70%",
  },
});

const joinForm = document.getElementById("joinForm");
const popup = document.getElementById("successPopup");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxrd6kc2WQ4du54w4JZRGZ0zUUxj0Yj7vTVjwcrp1uPxmhUF_8V7C619McU9RQLQcxtkw/exec";

function closePopup() {
  popup.classList.remove("active");
}

joinForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    membership: document.getElementById("membership").value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => res.text())
    .then(() => {
      popup.classList.add("active");
      joinForm.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Submission failed. Please try again.");
    });
});

gsap.to("#horse-parallax", {
  backgroundPosition: "50% 80%",
  ease: "none",
  scrollTrigger: {
    trigger: "#horse-parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from(".horse-overlay", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#horse-parallax",
    start: "top 70%",
  },
});

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

gsap.from("#join", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#join",
    start: "top 80%",
  },
});
