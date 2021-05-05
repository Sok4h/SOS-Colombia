const HideSection = (section, animation) => {
  SetAbleToAnimate(section);
  section.classList.add(animation);
  setTimeout(() => {
    SetActive(section, false);
  }, 1000);
}; //closes HideSection method

const ShowSection = (section, animation) => {
  SetAbleToAnimate(section);
  SetActive(section, true);
  setTimeout(() => {
    section.classList.add(animation);
  }, 1);
}; //closes ShowSection method

const SetAbleToAnimate = (section) => {
  if (!section.classList.contains("animate__animated"))
    section.classList.add("animate__animated");
}; //closes SetAbleToAnimate method

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
