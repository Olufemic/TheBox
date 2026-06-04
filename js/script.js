
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