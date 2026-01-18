const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
});



const slides = document.getElementById("slides");

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 50}%)`;
}



// Parallax Mouse Follow Effect
const parallaxImage = document.getElementById('parallaxImage');

if (parallaxImage) {
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  const speed = 0.1; // Lower = smoother, slower movement

  // Track mouse movement on entire document
  document.addEventListener('mousemove', (e) => {
    // Get viewport dimensions
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate distance from center (normalized -1 to 1)
    const deltaX = (e.clientX - centerX) / centerX;
    const deltaY = (e.clientY - centerY) / centerY;
    
    // Set target position (multiply for movement range)
    targetX = deltaX * 5; // Adjust 30 for more/less movement
    targetY = deltaY * 5;
  });

  // Smooth animation loop
  function animate() {
    // Lerp (linear interpolation) for smooth following
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    
    // Apply transform
    parallaxImage.style.transform = `translate(${currentX}px, ${currentY}px)`;
    
    requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
}



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,       // default (mobile first)
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

     navigation: {
        nextEl: ".my-next",
        prevEl: ".my-prev",
      },

  breakpoints: {
    640: {
      slidesPerView: 1.2, // optional nice preview
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});





var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,       // default (mobile first)
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

     navigation: {
        nextEl: ".my-next2",
        prevEl: ".my-prev2",
      },

  breakpoints: {
    640: {
      slidesPerView: 1.2, // optional nice preview
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});






var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,       // default (mobile first)
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

     navigation: {
        nextEl: ".my-next3",
        prevEl: ".my-prev3",
      },

  breakpoints: {
    640: {
      slidesPerView: 1.2, // optional nice preview
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



