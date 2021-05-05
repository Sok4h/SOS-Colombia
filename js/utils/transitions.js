const HideSection = (section, animation) => {
  PrepareForAnimation(section);
  section.classList.add(animation);
  setTimeout(() => {
    SetActive(section, false);
  }, 1000);
}; //closes HideSection method

const ShowSection = (section, animation) => {
  PrepareForAnimation(section);
  SetActive(section, true);
  setTimeout(() => {
    section.classList.add(animation);
  }, 1);
}; //closes ShowSection method

const PrepareForAnimation = (section) => {
  if (!section.classList.contains("animate__animated"))
    section.classList.add("animate__animated");

  CleanAnimations(section);
}; //closes SetAbleToAnimate method

const CleanAnimations = (section) => {
  section.classList.remove("animate__zoomOut");
  section.classList.remove("animate__zoomIn");
  section.classList.remove("animate__fadeInDown");
  section.classList.remove("animate__fadeInUp");
  section.classList.remove("animate__fadeOutLeft");
  section.classList.remove("animate__fadeInRight");
  section.classList.remove("animate__fadeIn");
}; //closes CleanAnimations method

const SetActive = (section, active) => {
  if (active) {
    if (section.classList.contains("hidden"))
      section.classList.remove("hidden");
    section.classList.add("active");
    section.classList.remove("animate__zoomOut");
  } else {
    if (!section.classList.contains("hidden")) {
      section.classList.add("hidden");
      section.classList.remove("active");
    }
  }
}; //closes SetActive method
