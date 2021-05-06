window.addEventListener('load', () => {
    const basicContainer = document.getElementById('basic-list');
    const equipmentContainer = document.getElementById('equipment-list');
    const injectologyContainer = document.getElementById('injectology-list');
    const woundsContainer = document.getElementById('wounds-list');
    const solutionsContainer = document.getElementById('solutions-list');
    const medicineContainer = document.getElementById('medicine-list');

    createCheckboxesFromDatabase(medicineContainer, 'medicine');
    createCheckboxesFromDatabase(solutionsContainer, 'solutions');
    createCheckboxesFromDatabase(woundsContainer, 'wounds');
    createCheckboxesFromDatabase(injectologyContainer, 'injectology');
    createCheckboxesFromDatabase(equipmentContainer, 'equipment');
    createCheckboxesFromDatabase(basicContainer, 'basic');

    setTimeout(addCheckboxBehavior, 5000);
    

    function createCheckboxesFromDatabase(container, query) {
        db.collection('supplies').doc(query).get()
        .then(snapshot => {
            let height = 0;
            snapshot.data().items.forEach((item, index) => {
                container.appendChild(createCheckbox(item, `${query}Request`, index, `${query}Request${index}`, `${query}Request${index}`, 'li'));
                height++;
            });
            container.style.setProperty('--height', `${height*5}rem`);
        });
    }
});