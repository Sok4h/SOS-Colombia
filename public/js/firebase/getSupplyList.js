const basicContainer = document.getElementById("basic-list");
const cleaningContainer = document.getElementById("cleaning-list");
const equipmentContainer = document.getElementById("equipment-list");
const injectologyContainer = document.getElementById("injectology-list");
const woundsContainer = document.getElementById("wounds-list");
const solutionsContainer = document.getElementById("solutions-list");
const medicineContainer = document.getElementById("medicine-list");
const suppplyContainerAmount = 7;
let suppplyContainersLoaded = 0;

const LoadSuppplyCheckboxes = () => {
  containersLoaded = 0;
  createCheckboxesFromDatabase(medicineContainer, "medicine");
  createCheckboxesFromDatabase(solutionsContainer, "solutions");
  createCheckboxesFromDatabase(woundsContainer, "wounds");
  createCheckboxesFromDatabase(injectologyContainer, "injectology");
  createCheckboxesFromDatabase(equipmentContainer, "equipment");
  createCheckboxesFromDatabase(cleaningContainer, "cleaning");
  createCheckboxesFromDatabase(basicContainer, "basic");
};

const createCheckboxesFromDatabase = (container, query) => {
  container.innerHTML = "";
  db.collection("supplies")
    .doc(query)
    .get()
    .then((snapshot) => {
      let height = 0;
      snapshot.data().items.forEach((item, index) => {
        container.appendChild(
          createCheckbox(
            item,
            `${query}Request`,
            index,
            `${query}Request${index}`,
            `${query}Request${index}`,
            "li"
          )
        );
        height++;
      });
      container.style.setProperty("--height", `${height * 5}rem`);
      suppplyContainersLoaded += 1;
      if (suppplyContainersLoaded == suppplyContainerAmount) {
        addCheckboxBehavior();
      }
    });
};
