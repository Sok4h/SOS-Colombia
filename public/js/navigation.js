//Screens

const splashScreen = document.querySelector(".splashpage");
let currentScreen = splashScreen;
const backHome = document.getElementById("create-request-backHome");
const createRequestScreen = document.querySelector(".create-request-section");
const loginScreen = document.querySelector(".login");
const helpScreen = document.querySelector(".help-section");
const donateBloodScreen = document.querySelector(".blood-donation-section");
const donateUxlabScreen = document.querySelector(".uxlab-donation-section");
const findItemsScreen = document.querySelector(".find-items");
const donationsScreen = document.querySelector(".donations-section");
const requestListScreen = document.querySelector(".myRequests");
const requestCreatedScreen = document.querySelector(
  ".request-confirmation-section"
);

const navBar = document.querySelector(".main-header");

//Buttons
const brigateBtn = document.getElementById("brigade-btn");
const citizenBtn = document.getElementById("citizen-btn");
const loginBtn = document.getElementById("login-btn");
const logOutBtns = document.querySelectorAll(".logOutBtn");
const createRequestBtn = document.getElementById("create-request-btn");
const createRequestBackBtn = document.getElementById("create-request-back");
const navHelpLink = document.getElementById("nav-bring-help");
const navDonationsLink = document.getElementById("nav-donations");
const navObtainSuppliesLink = document.getElementById("nav-obtain-supplies");
const navDonateBloodLink = document.getElementById("nav-donate-blood");
const navDonateUxLabLink = document.getElementById("nav-donate-uxlab");
const confirmRequestCreated = document.getElementById("btnRequestConfirmation");

function navigateBetweenScreens(from, to) {
  currentScreen = to;

  HideSection(from, "animate__zoomOut");
  setTimeout(() => {
    ShowSection(to, "animate__zoomIn");
  }, 500);
} //closes navigateBetweenScreens method

function navigateBetweenScreensAnimated(from, to, outAnimation, inAnimation) {
  currentScreen = to;

  HideSection(from, outAnimation);
  setTimeout(() => {
    ShowSection(to, inAnimation);
  }, 500);
} //closes navigateBetweenScreensAnimated method

brigateBtn.addEventListener("click", () => {
  Redirect("/login-brigadista");
});

backHome.addEventListener("click", () => {
  Redirect("");
});

loginBtn.addEventListener("click", () => {
  login()
    .then(() => {
      Redirect("/my-requests");
    })
    .catch((error) => {
      window.alert(error.message);
      console.log(error);
    });
});

logOutBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    firebase.auth().signOut();
    let waitingLogOut = setInterval(() => {
      if (!currentUser) {
        Redirect("/login-brigadista");
        clearInterval(waitingLogOut);
      }
    }, 250);
  });
});

createRequestBtn.addEventListener("click", () => {
  Redirect("/new-request");
});

createRequestBackBtn.addEventListener("click", () => {
  Redirect("/my-requests");
});

requestCreatedScreen.addEventListener("click", () => {
  Redirect("/my-requests");
});

citizenBtn.addEventListener("click", () => {
  Redirect("/citizen-donate-uxlab");
});

navHelpLink.addEventListener("click", () => {
  Redirect("/citizen-help");
  closeMenu();

});

navDonationsLink.addEventListener("click", () => {
  Redirect("/citizen-donation");
  closeMenu();

});

navObtainSuppliesLink.addEventListener("click", () => {
  Redirect("/citizen-get-supplies");
  closeMenu();

});
navDonateBloodLink.addEventListener("click", () => {
  Redirect("/citizen-donate-blood");
  closeMenu();

});

navDonateUxLabLink.addEventListener("click", () => {
  Redirect("/citizen-donate-uxlab");
  closeMenu();

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
