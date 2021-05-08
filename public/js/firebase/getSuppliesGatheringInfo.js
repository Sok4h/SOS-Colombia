const suppliesEastContainer = document.getElementById("suppliesInfo-east");
const suppliesNorthContainer = document.getElementById("suppliesInfo-north");
const suppliesCenterContainer = document.getElementById("suppliesInfo-center");
const suppliesSouthContainer = document.getElementById("suppliesInfo-south");
const suppliesWestContainer = document.getElementById("suppliesInfo-west");

const LoadSupplyGatheringPoints = () => {
  LoadSupplyGatheingPoint(suppliesEastContainer, "Oriente");
  LoadSupplyGatheingPoint(suppliesNorthContainer, "Norte");
  LoadSupplyGatheingPoint(suppliesCenterContainer, "Centro");
  LoadSupplyGatheingPoint(suppliesSouthContainer, "Sur");
  LoadSupplyGatheingPoint(suppliesWestContainer, "Occidente");
};

function LoadSupplyGatheingPoint(container, query) {
  db.collection("supplies_gathering_info")
    .where("sector", "==", query)
    .get()
    .then((data) => {
      container.innerHTML = "";
      if (data.size == 0) NoSuppliesGatheringPoints(container);
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
function NoSuppliesGatheringPoints(container) {

  let noitems = document.createElement("h2");
  noitems.innerHTML =
    "No hay sitios para obtener insumos en esta zona por el momento.";

  container.appendChild(noitems);
} //closes NoRequest method
