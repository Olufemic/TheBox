// navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        hamburger.textContent = "✕";
    }else{
        hamburger.textContent = "☰";
    }

});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.textContent = "☰";
  });
});

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots span");

let currentSlide = 0;

function updateCarousel(){
    track.style.transform =
      `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot =>
      dot.classList.remove("active")
    );

    dots[currentSlide].classList.add("active");
}

document
  .getElementById("nextBtn")
  .addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    updateCarousel();
});

document
  .getElementById("prevBtn")
  .addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    updateCarousel();
});

dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        currentSlide = index;
        updateCarousel();
    });
});


// Counter Animation
const counters = document.querySelectorAll(".count");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){

      const counter = entry.target;
      const target = +counter.dataset.target;

      let current = 0;

      const update = () => {
        const increment = target / 50;

        if(current < target){
          current += increment;
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(update);
        }else{
          counter.textContent = target;
        }
      };

      update();
      observer.unobserve(counter);
    }
  });
});

counters.forEach(counter => observer.observe(counter));

// fade
const hiddenElements = document.querySelectorAll(
  ".rep-card, .service-card, .proj-card"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach(el => {
  el.classList.add("hidden");
  revealObserver.observe(el);
});

// active nav links
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;

    if(window.scrollY >= top){
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }
  });
});

//Button ripple effect 
document.querySelectorAll("button").forEach(button => {

  button.addEventListener("click", function(e){

    const circle = document.createElement("span");

    const size = Math.max(
      this.clientWidth,
      this.clientHeight
    );

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.style.left =
      e.offsetX - size / 2 + "px";

    circle.style.top =
      e.offsetY - size / 2 + "px";

    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });

});

