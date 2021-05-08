const locations = {
  Norte: [],
  Oriente: [],
  Sur: [],
  Oeste: [],
  Centro: [],
};

const LoadLocationInput = (selectionInput) => {
  db.collection("supplies_concentration_spots")
    .get()
    .then((locationsDB) => {
      ClearLocations();
      locationsDB.forEach((locationDB) => {
        const location = {
          address: locationDB.data().address,
          name: locationDB.data().name,
          phones: locationDB.data().phone,
          zone: locationDB.data().sector,
          id: locationDB.id,
        };

        locations[location.zone].push(location);
      });
      AddOptionToInput(selectionInput);
    });
};

const AddOptionToInput = (locationInput) => {
  locationInput.innerHTML = "";

  var northOtGroup = document.createElement("optgroup");
  northOtGroup.label = "Norte";
  locationInput.appendChild(northOtGroup);

  locations.Norte.forEach((location) => {
    var opt = document.createElement("option");
    opt.innerHTML = location.name;
    opt.value = location.id;
    northOtGroup.appendChild(opt);
  });

  var eastOtGroup = document.createElement("optgroup");
  eastOtGroup.label = "Oriente";
  locationInput.appendChild(eastOtGroup);

  locations.Oriente.forEach((location) => {
    var opt = document.createElement("option");
    opt.innerHTML = location.name;
    opt.value = location.id;
    eastOtGroup.appendChild(opt);
  });

  var southGroup = document.createElement("optgroup");
  southGroup.label = "Sur";
  locationInput.appendChild(southGroup);

  locations.Sur.forEach((location) => {
    var opt = document.createElement("option");
    opt.innerHTML = location.name;
    opt.value = location.id;
    southGroup.appendChild(opt);
  });

  var westGroup = document.createElement("optgroup");
  westGroup.label = "Oeste";
  locationInput.appendChild(westGroup);

  locations.Oeste.forEach((location) => {
    var opt = document.createElement("option");
    opt.innerHTML = location.name;
    opt.value = location.id;
    westGroup.appendChild(opt);
  });

  var centerGroup = document.createElement("optgroup");
  centerGroup.label = "Centro";
  locationInput.appendChild(centerGroup);

  locations.Centro.forEach((location) => {
    var opt = document.createElement("option");
    opt.innerHTML = location.name;
    opt.value = location.id;
    centerGroup.appendChild(opt);
  });
};

const ClearLocations = () => {
  locations.Norte = [];
  locations.Oriente = [];
  locations.Sur = [];
  locations.Oeste = [];
  locations.Centro = [];
};
