const arrowCont = document.querySelector(".arrow");
const learnMore = document.querySelector(".lrnmore");
const learnContainer = document.querySelector(".learnMoreCont");

arrowCont.classList.add("animate-upDown");

learnContainer.addEventListener("mouseenter", () => {
  learnMore.classList.add("animate-L2R");
  arrowCont.classList.remove("animate-upDown");
  void arrowCont.offsetWidth;
  arrowCont.classList.add("animate-upDown");
});

learnContainer.addEventListener("mouseleave", () => {
  learnMore.style.transition = "none";
  learnMore.classList.remove("animate-L2R");
  void learnMore.offsetWidth; 
  learnMore.style.transition = ""; 
});
