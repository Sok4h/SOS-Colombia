const selectLocationInputs = document.querySelectorAll(
  ".create-request-section__locationSelection"
);

const locations = {
  Norte: [],
  Oriente: [],
  Sur: [],
  Oeste: [],
  Centro:[]
};


const LoadLocation = () => {
  db.collection("supplies_concentration_spots")
    .get()
    .then((locationsDB) => {
      locationsDB.forEach((locationDB) => {
        const location = {
          address: locationDB.data().address,
          name: locationDB.data().name,
          phones: locationDB.data().phone,
          zone: locationDB.data().sector,
        };

        locations[location.zone].push(location);
        var opt = document.createElement("option");
        opt.value = locationDB.id;
        opt.innerHTML = location.name;
        AddOptionToInputs(opt);
      });
 
    });
};

const AddOptionToInputs = (option) => {
  selectLocationInputs.forEach((locationInput) => {
    locationInput.appendChild(option);
  });
};

LoadLocation();
