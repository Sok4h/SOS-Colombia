window.addEventListener("load", () => {
  const createRequestBtn = document.getElementById(
    "finish-request-creation-btn"
  );
  const placeSelect = document.getElementById("punto");

  createRequestBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let json = {
      supplies: [],
    };
    if (placeSelect.value) {
      const basicCheckboxes = document.querySelectorAll(
        'input[name="basicRequest"]:checked'
      );
      const cleaningCheckboxes = document.querySelectorAll(
        'input[name="cleaningRequest"]:checked'
      );
      const equipmentCheckboxes = document.querySelectorAll(
        'input[name="equipmentRequest"]:checked'
      );
      const injectologyCheckboxes = document.querySelectorAll(
        'input[name="injectologyRequest"]:checked'
      );
      const medicineCheckboxes = document.querySelectorAll(
        'input[name="medicineRequest"]:checked'
      );
      const solutionsCheckboxes = document.querySelectorAll(
        'input[name="solutionsRequest"]:checked'
      );
      const woundsCheckboxes = document.querySelectorAll(
        'input[name="woundsRequest"]:checked'
      );

      const foodCheckbox = document.querySelector(
        'input[name="foodRequest"]:checked'
      );
      const animalFoodCheckbox = document.querySelector(
        'input[name="animalFoodRequest"]:checked'
      );

      let requestLength =
        basicCheckboxes.length +
        cleaningCheckboxes.length +
        equipmentCheckboxes.length +
        injectologyCheckboxes.length +
        medicineCheckboxes.length +
        solutionsCheckboxes.length +
        woundsCheckboxes.length +
        foodCheckbox +
        animalFoodCheckbox;

      if (requestLength == 0) {
        window.alert("Escoge al menos un insumo");
        return;
      }

      basicCheckboxes.forEach((basic) =>
        json.supplies.push({
          category: "basic",
          index: basic.value,
          name: basic.closest(".checkbox").querySelector("label").innerText,
        })
      );
      cleaningCheckboxes.forEach((cleaning) =>
        json.supplies.push({
          category: "cleaning",
          index: cleaning.value,
          name: cleaning.closest(".checkbox").querySelector("label").innerText,
        })
      );
      equipmentCheckboxes.forEach((equipment) =>
        json.supplies.push({
          category: "equipment",
          index: equipment.value,
          name: equipment.closest(".checkbox").querySelector("label").innerText,
        })
      );
      injectologyCheckboxes.forEach((injectology) =>
        json.supplies.push({
          category: "injectology",
          index: injectology.value,
          name: injectology.closest(".checkbox").querySelector("label")
            .innerText,
        })
      );
      medicineCheckboxes.forEach((medicine) =>
        json.supplies.push({
          category: "medicine",
          index: medicine.value,
          name: medicine.closest(".checkbox").querySelector("label").innerText,
        })
      );
      solutionsCheckboxes.forEach((solutions) =>
        json.supplies.push({
          category: "solutions",
          index: solutions.value,
          name: solutions.closest(".checkbox").querySelector("label").innerText,
        })
      );
      woundsCheckboxes.forEach((wounds) =>
        json.supplies.push({
          category: "wounds",
          index: wounds.value,
          name: wounds.closest(".checkbox").querySelector("label").innerText,
        })
      );

      json.supplies.push({   
  
        name: foodCheckbox.closest(".checkbox").querySelector("label").innerText,
      });

      json.supplies.push({
    
        name: animalFoodCheckbox.closest(".checkbox").querySelector("label").innerText,
      });



      const currentTime = new Date();
      let hour = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let timeString = "";

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (hour > 12) {
        hour -= 12;
        if (hour < 10) {
          timeString = "0" + hour + ":" + minutes + " PM";
        } else {
          timeString = hour + ":" + minutes + " PM";
        }
      } else {
        if (hour < 10) {
          timeString = "0" + hour + ":" + minutes + " AM";
        } else {
          timeString = hour + ":" + minutes + " AM";
        }
      }

      json.timestamp = timeString;

      firebase.auth().onAuthStateChanged((user) => {
        json.author = user.email.split("@")[0].toUpperCase();
      });

      json.supply_concentration_spot = placeSelect.value;

      db.collection("supplies_concentration_spots")
        .doc(placeSelect.value)
        .get()
        .then((data) => {
          json.sector = data.data().sector;
          db.collection("requests")
            .doc()
            .set(json)
            .then(() => {
              navigateBetweenScreens(createRequestScreen, requestCreatedScreen);
            });
        });

      return;
    }

    window.alert("Elige un punto de la lista");
  });
});
