const SplashScreen = document.querySelector(".splashpage");
const CreateRequestScreen = document.querySelector(".create-request-section");

const ClickedBrigradeButton = () => {
  FromSplashToCreateRequestScreen();
}; //closes ClickedBrigradeButton method

const FromSplashToCreateRequestScreen = () => {
  HideSection(SplashScreen, "animate__zoomOut");
  setTimeout(() => {
    ShowSection(CreateRequestScreen, "animate__zoomIn");
  }, 1000);
}; //closes FromSplashToCreateRequestScreen method

const FromCreateRequestScreenToSplash = () => {
    HideSection(CreateRequestScreen, "animate__zoomOut");
    setTimeout(() => {
      ShowSection(SplashScreen, "animate__zoomIn");
    }, 1000);
  }; //closes FromSplashToCreateRequestScreen method


