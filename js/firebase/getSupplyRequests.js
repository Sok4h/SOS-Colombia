const NorthRequestContainer = document.querySelector(".help-section__North");
const SouthRequestContainer = document.querySelector(".help-section__South");
const CenterRequestContainer = document.querySelector(".help-section__Center");
const WestRequestContainer = document.querySelector(".help-section__West");
const EastRequestContainer = document.querySelector(".help-section__East");

loadRequestInfo(NorthRequestContainer, "Norte");
loadRequestInfo(SouthRequestContainer, "Sur");
loadRequestInfo(CenterRequestContainer, "Center");
loadRequestInfo(WestRequestContainer, "Oeste");
loadRequestInfo(EastRequestContainer, "Oriente");

function loadRequestInfo(container, query) {
  db.collection("requests")
    .where("sector", "==", query)
    .get()
    .then((data) => {
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
              section: "Aqui iria la descripción del request",
              list: suppliesNames,
            };

            const card = createCard("", cardData, "li");

            height += 10 + 3 * cardData.list.length;

            container.appendChild(card);
            container.style.setProperty("--height", `${height}rem`);
          });
      });
    });
}
