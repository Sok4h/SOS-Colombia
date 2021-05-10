//link
let baseLink = "";
let linkRoute = "";

function AnalyzeLink() {
  let link = window.location.href;
  if (!link.includes("#")) {
    baseLink = link + "#";
    window.location.href = baseLink;
  } else {
    let linkSegments = [];
    linkSegments = link.split("#");
    baseLink = linkSegments[0] + "#";
    linkRoute = linkSegments[1];
  }
} //closes Analyzelink method;

function Router() {
  AnalyzeLink();

  switch (linkRoute) {
    case "":
      deactivateHeader();
      navigateBetweenScreensAnimated(
        currentScreen,
        splashScreen,
        "animate__fadeOutRight",
        "animate__zoomIn"
      );     

      break;

    case "/login-brigadista":
      deactivateHeader();

      if (currentUser) {
        Redirect("/my-requests");
      } else {
        if (currentScreen != loginScreen) {
          navigateBetweenScreensAnimated(
            currentScreen,
            loginScreen,
            "animate__fadeOutLeft",
            "animate__zoomIn"
          );

          let validateUserAlreadyLogged = setInterval(() => {
            if (currentUser) {
              Redirect("/my-requests");
              clearInterval(validateUserAlreadyLogged);
            }
          }, 250);
        }
      }
      break;

    case "/my-requests":
      if (currentUser) {
        navigateBetweenScreensAnimated(
          currentScreen,
          requestListScreen,
          "animate__fadeOutLeft",
          "animate__fadeInRight"
        );

        LoadMyRequests(currentUserID);
      } else {
        Redirect("/login-brigadista");
      }
      break;

    case "/new-request":
      if (currentUser) {
        navigateBetweenScreensAnimated(
          currentScreen,
          createRequestScreen,
          "animate__fadeOutLeft",
          "animate__fadeInRight"
        );

        LoadLocationInput(
          document.querySelector(".create-request-section__locationSelection")
        );
        LoadSuppplyCheckboxes();
      } else {
        Redirect("/my-requests");
      }

      break;
    /////////////////////////////////////////////////
    ///////////////////CITIZEN/////////////////////
    /////////////////////////////////////////////////

    case "/citizen-help":
      navigateBetweenScreensAnimated(
        currentScreen,
        helpScreen,
        "animate__fadeOutLeft",
        "animate__fadeInRight"
      );
      setTimeout(() => {
        ShowSection(navBar, "animate__fadeIn");
      }, 500);
      loadSupplyRequests();
      linkChosen(navHelpLink)
      break;

    case "/citizen-donation":
      navigateBetweenScreensAnimated(
        currentScreen,
        donationsScreen,
        "animate__fadeOutLeft",
        "animate__fadeInRight"
      );
      setTimeout(() => {
        ShowSection(navBar, "animate__fadeIn");
      }, 500);
      getDonations();
      linkChosen(navDonationsLink)
      break;

    case "/citizen-get-supplies":
      navigateBetweenScreensAnimated(
        currentScreen,
        findItemsScreen,
        "animate__fadeOutLeft",
        "animate__fadeInRight"
      );
      setTimeout(() => {
        ShowSection(navBar, "animate__fadeIn");
      }, 500);

      LoadSupplyGatheringPoints();
      linkChosen(navObtainSuppliesLink)
      break;

    case "/citizen-donate-blood":
      navigateBetweenScreensAnimated(
        currentScreen,
        donateBloodScreen,
        "animate__fadeOutLeft",
        "animate__fadeInRight"
      );
      setTimeout(() => {
        ShowSection(navBar, "animate__fadeIn");
      }, 500);

      getBloodDonations();
      linkChosen(navDonateBloodLink)
      break;

    case "/404":
      Redirect("");
      break;

    default:
      Redirect("/404");
      break;

      break;
  } //closes Router switch
} //closes Router method

function Redirect(path) {
  window.location.href = baseLink + path;
} //closes Redirect method

window.onhashchange = function () {
  Router();
}; //closes onHasChange event

Router();
