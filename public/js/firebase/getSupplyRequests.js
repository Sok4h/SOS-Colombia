const NorthRequestContainer = document.querySelector(".help-section__North");
const SouthRequestContainer = document.querySelector(".help-section__South");
const CenterRequestContainer = document.querySelector(".help-section__Center");
const WestRequestContainer = document.querySelector(".help-section__West");
const EastRequestContainer = document.querySelector(".help-section__East");
const supplyRequestContainersAmount = 5;
let supplyRequestContainersLoaded = 0;

const loadSupplyRequests = () => {
  loadRequestInfo(NorthRequestContainer, "Norte");
  loadRequestInfo(SouthRequestContainer, "Sur");
  loadRequestInfo(CenterRequestContainer, "Centro");
  loadRequestInfo(WestRequestContainer, "Oeste");
  loadRequestInfo(EastRequestContainer, "Oriente");
};

function loadRequestInfo(container, query) {
  db.collection("requests")
    .where("sector", "==", query)
    .get()
    .then((data) => {
      container.innerHTML = "";
  
      if (data.size == 0) NoRequest(container);

      let height = 1;
      data.forEach((requestData) => {
        const request = {
          author: requestData.data().author,
          zone: requestData.data().sector,
          location: requestData.data().supply_concentration_spot,
          time: requestData.data().timestamp,
          supplies: requestData.data().supplies,
          id: requestData.id,
        };

        const suppliesNames = [];
        request.supplies.forEach((supply) => {
          suppliesNames.push(supply.name);
        });

        db.collection("supplies_concentration_spots")
          .doc(request.location)
          .get()
          .then((locationData) => {
            const location = {
              address: locationData.data().address,
              name: locationData.data().name,
              phones: locationData.data().phone,
              zone: locationData.data().sector,
              id: locationData.id,
            };

            const cardData = {
              title: location.name,
              subtitle: location.address,
              section: "¿Qué se necesita?",
              list: suppliesNames,
              time: request.time,
            };

            const card = createCard("", cardData, "li");

            height += 10 + 5 * cardData.list.length;

            container.appendChild(card);
            container.style.setProperty("--height", `${height}rem`);
          });
      });
    });
}

function NoRequest(container) {
  const noitems = document.createElement("h2");
  noitems.innerHTML = "No hay solicitudes de esta zona en el momento.";

  container.appendChild(noitems);
} //closes NoRequest method
