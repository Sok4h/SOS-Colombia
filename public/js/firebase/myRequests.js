const myRequest = document.querySelector(".myRequests__content");

function LoadMyRequests(userID) {

    myRequest.innerHTML = '';
    db.collection("requests")
      .where("author", "==", userID)
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
                list: suppliesNames,
                time: request.time
              };
  
              let btnInfo = {
                text: 'Terminar solicitud',
                callback: ActivateDialog,
                message: 'Terminarás tu solicitud de insumos'
              }

              const card = createCard("", cardData, "article", btnInfo);

              card.dataset.requestId = request.id;
  
              myRequest.appendChild(card);
            });
        });
      });
}

function deleteRequest(card) {
  const id = card.dataset.requestId;
  db.collection('requests').doc(id).delete()
  .then(() => {

    CloseDialog();
  });

  card.parentNode.removeChild(card);
}