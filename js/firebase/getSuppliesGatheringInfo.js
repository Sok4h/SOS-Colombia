window.addEventListener("load", () => {
  const suppliesEastContainer = document.getElementById("suppliesInfo-east");
  const suppliesNorthContainer = document.getElementById("suppliesInfo-north");
  const suppliesCenterContainer = document.getElementById(
    "suppliesInfo-center"
  );
  const suppliesSouthContainer = document.getElementById("suppliesInfo-south");
  const suppliesWestContainer = document.getElementById("suppliesInfo-west");

  loadSuppliesInfo(suppliesEastContainer, "Oriente");
  loadSuppliesInfo(suppliesNorthContainer, "Norte");
  loadSuppliesInfo(suppliesCenterContainer, "Centro");
  loadSuppliesInfo(suppliesSouthContainer, "Sur");
  loadSuppliesInfo(suppliesWestContainer, "Occidente");

  function loadSuppliesInfo(container, query) {
    db.collection("supplies_gathering_info")
      .where("sector", "==", query)
      .get()
      .then((data) => {
        let height = 0;
        data.forEach((supplieGathering) => {
          const supplieGatheringData = {
            title: supplieGathering.data().name,
            subtitle: supplieGathering.data().address,
            section: "Teléfono",
            list: supplieGathering.data().phone,
          };

      
          height++;
          const card = createCard("dark", supplieGatheringData, "li");
          container.appendChild(card);
        });

        container.style.setProperty("--height", `${height * 20}rem`);
      });
  }
});
