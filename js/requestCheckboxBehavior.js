window.addEventListener('load', () => {
    const basicToggle = document.querySelector('input[name="basic"]');
    const basicExpand = document.querySelector('input[name="basicTitle"]');
    const basicCheckboxes = document.querySelectorAll('input[name="basicRequest"]');

    const equipmentToggle = document.querySelector('input[name="equipment"]');
    const equipmentExpand = document.querySelector('input[name="equipmentTitle"]');
    const equipmentCheckboxes = document.querySelectorAll('input[name="equipmentRequest"]');

    const injectologyToggle = document.querySelector('input[name="injectology"]');
    const injectologyExpand = document.querySelector('input[name="injectologyTitle"]');
    const injectologyCheckboxes = document.querySelectorAll('input[name="injectologyRequest"]');

    const medicineToggle = document.querySelector('input[name="medicine"]');
    const medicineExpand = document.querySelector('input[name="medicineTitle"]');
    const medicineCheckboxes = document.querySelectorAll('input[name="medicineRequest"]');

    const solutionsToggle = document.querySelector('input[name="solutions"]');
    const solutionsExpand = document.querySelector('input[name="solutionsTitle"]');
    const solutionsCheckboxes = document.querySelectorAll('input[name="solutionsRequest"]');

    const woundsToggle = document.querySelector('input[name="wounds"]');
    const woundsExpand = document.querySelector('input[name="woundsTitle"]');
    const woundsCheckboxes = document.querySelectorAll('input[name="woundsRequest"]');

    basicToggle.addEventListener('change', (event) => {
        toggleSection(basicToggle, basicExpand, basicCheckboxes);
    });

    equipmentToggle.addEventListener('change', (event) => {
        toggleSection(equipmentToggle, equipmentExpand, equipmentCheckboxes);
    });

    injectologyToggle.addEventListener('change', (event) => {
        toggleSection(injectologyToggle, injectologyExpand, injectologyCheckboxes);
    });

    medicineToggle.addEventListener('change', (event) => {
        toggleSection(medicineToggle, medicineExpand, medicineCheckboxes);
    });

    solutionsToggle.addEventListener('change', (event) => {
        toggleSection(solutionsToggle, solutionsExpand, solutionsCheckboxes);
    });

    woundsToggle.addEventListener('change', (event) => {
        toggleSection(woundsToggle, woundsExpand, woundsCheckboxes);
    });

    function toggleSection(toggle, expand, checkboxes) {
        expand.checked = true;
        checkboxes.forEach(checkbox => {
            checkbox.checked = toggle.checked;
        });
    }
});