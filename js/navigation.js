//Sections
const splashScreen = document.querySelector(".splashpage");
const createRequestScreen = document.querySelector(".create-request-section");
const loginScreen = document.querySelector(".login");
const helpScreen = document.querySelector(".help-section");
const findItemsScreen = document.querySelector(".find-items");
const donationsScreen = document.querySelector(".donations-section");
const requestListScreen = document.querySelector(".request");
const requestCreatedScreen = document.querySelector(
  ".request-confirmation-section"
);
const navBar = document.querySelector(".main-header");

//Buttons
const brigateBtn = document.getElementById("brigade-btn");
const citizenBtn = document.getElementById("citizen-btn");
const loginBtn = document.getElementById("login-btn");
const createRequestBtn = document.getElementById("create-request-btn");
const createRequestBackBtn = document.getElementById("create-request-back");
const navHelpLink = document.getElementById("nav-bring-help");
const navDonationsLink = document.getElementById("nav-donations");
const navObtainSuppliesLink = document.getElementById("nav-obtain-supplies");

function navigateBetweenScreens(from, to) {
  HideSection(from, "animate__zoomOut");
  setTimeout(() => {
    ShowSection(to, "animate__zoomIn");
  }, 500);
}

function navigateBetweenScreensAnimated(from, to, outAnimation, inAnimation) {
  HideSection(from, outAnimation);
  setTimeout(() => {
    ShowSection(to, inAnimation);
  }, 500);
}

function navBarTransition(to) {
  const currentSection = document.querySelector("section.active");
  if (currentSection != to) navigateBetweenScreens(currentSection, to);
}

createRequestBackBtn.addEventListener("click", () => {
  navigateBetweenScreens(createRequestScreen, requestListScreen);
});

brigateBtn.addEventListener("click", () => {
  navigateBetweenScreens(splashScreen, loginScreen);
});

citizenBtn.addEventListener("click", () => {
  navigateBetweenScreens(splashScreen, helpScreen);
  setTimeout(() => {
    ShowSection(navBar, "animate__fadeIn");
  }, 1000);
});

loginBtn.addEventListener("click", () => {
  login()
  .then(user => {
    navigateBetweenScreensAnimated(loginScreen, requestListScreen,"animate__fadeOutLeft","animate__fadeInRight");
  })
  .catch(error => {
    window.alert(error.message);
    console.log(error);
  });
});

createRequestBtn.addEventListener("click", () => {
  navigateBetweenScreens(requestListScreen, createRequestScreen);
});

navHelpLink.addEventListener("click", () => {
  navBarTransition(helpScreen);
});

navDonationsLink.addEventListener("click", () => {
  navBarTransition(donationsScreen);
});

navObtainSuppliesLink.addEventListener("click", () => {
  navBarTransition(findItemsScreen);
});


requestCreatedScreen.addEventListener("click", () => {
  navigateBetweenScreens(requestCreatedScreen, requestListScreen);
});

/*const ClickedBrigradeButton = () => {
  FromSplashToCreateRequestScreen();
}; //closes ClickedBrigradeButton method

const FromSplashToCreateRequestScreen = () => {
  HideSection(splashScreen, "animate__zoomOut");
  setTimeout(() => {
    ShowSection(createRequestScreen, "animate__zoomIn");
  }, 1000);
}; //closes FromSplashToCreateRequestScreen method

const FromCreateRequestScreenToSplash = () => {
    HideSection(createRequestScreen, "animate__zoomOut");
    setTimeout(() => {
      ShowSection(splashScreen, "animate__zoomIn");
    }, 1000);
  }; //closes FromSplashToCreateRequestScreen method
*/
