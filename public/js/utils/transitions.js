const HideSection = (section, animation) => {
  PrepareForAnimation(section);
  section.classList.add(animation);
  setTimeout(() => {
    SetActive(section, false);
  }, 500);
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
  section.classList.remove("animate__fadeOutRight");
  section.classList.remove("animate__fadeInLeft");
  section.classList.remove("animate__fadeIn");
  section.classList.remove("animate__slideLeft");
  section.classList.remove("animate__fadeIn");
  section.classList.remove("animate__fadeOut");
  section.classList.remove("animate__fadeOutDown");
  section.classList.remove("animate__fadeInUp");
}; //closes CleanAnimations method

const SetActive = (section, active) => {
  if (active) {
    if (section.classList.contains("hidden"))
      section.classList.remove("hidden");
  } else {
    if (!section.classList.contains("hidden")) {
      section.classList.add("hidden");
    }
  }
}; //closes SetActive method
