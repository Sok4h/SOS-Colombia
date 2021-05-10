const btn_nav = document.querySelector(".burgermenu__btn");
const header = document.querySelector(".main-header");

const closeMenu = () => {
  btn_nav.classList.remove("burgermenu__btn--clicked");
  btn_nav.classList.remove("burgermenu__btn--collapsed");
  header.classList.remove("main-header--active");
};

const openMenu = () => {
  btn_nav.classList.add("burgermenu__btn--clicked");
  btn_nav.classList.add("burgermenu__btn--collapsed");
  header.classList.add("main-header--active");
};

const deactivateHeader = () => {
  if (!header.classList.contains("hidden")) header.classList.add("hidden");
};

const activateHeader = () => {
  if (header.classList.contains("hidden")) header.classList.remove("hidden");
};

const linkChosen = (linkSelected) => {
  navHelpLink.classList.remove("__chosen");
  navDonationsLink.classList.remove("__chosen");
  navObtainSuppliesLink.classList.remove("__chosen");
  navDonateBloodLink.classList.remove("__chosen");

  switch (linkSelected) {
    case navHelpLink:
      navHelpLink.classList.add("__chosen");
      break;

    case navDonationsLink:
      navDonationsLink.classList.add("__chosen");
      break;

    case navObtainSuppliesLink:
      navObtainSuppliesLink.classList.add("__chosen");
      break;

    case navDonateBloodLink:
      navDonateBloodLink.classList.add("__chosen");
      break;
  }
};

btn_nav.addEventListener("click", () => {
  if (!btn_nav.classList.contains("burgermenu__btn--clicked")) {
    openMenu();
  } else {
    closeMenu();
  }
});
