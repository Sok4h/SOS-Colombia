const addCheckboxBehavior = () => {
  const basicToggle = document.querySelector('input[name="basic"]');
  const basicExpand = document.querySelector('input[name="basicTitle"]');
  const basicCheckboxes = document.querySelectorAll(
    'input[name="basicRequest"]'
  );


  const cleaningToggle = document.querySelector('input[name="cleaning"]');
  const cleaningExpand = document.querySelector('input[name="cleaningTitle"]');
  const cleaningCheckboxes = document.querySelectorAll(
    'input[name="cleaningRequest"]'
  );

  const equipmentToggle = document.querySelector('input[name="equipment"]');
  const equipmentExpand = document.querySelector(
    'input[name="equipmentTitle"]'
  );
  const equipmentCheckboxes = document.querySelectorAll(
    'input[name="equipmentRequest"]'
  );

  const injectologyToggle = document.querySelector('input[name="injectology"]');
  const injectologyExpand = document.querySelector(
    'input[name="injectologyTitle"]'
  );
  const injectologyCheckboxes = document.querySelectorAll(
    'input[name="injectologyRequest"]'
  );

  const medicineToggle = document.querySelector('input[name="medicine"]');
  const medicineExpand = document.querySelector('input[name="medicineTitle"]');
  const medicineCheckboxes = document.querySelectorAll(
    'input[name="medicineRequest"]'
  );

  const solutionsToggle = document.querySelector('input[name="solutions"]');
  const solutionsExpand = document.querySelector(
    'input[name="solutionsTitle"]'
  );
  const solutionsCheckboxes = document.querySelectorAll(
    'input[name="solutionsRequest"]'
  );

  const woundsToggle = document.querySelector('input[name="wounds"]');
  const woundsExpand = document.querySelector('input[name="woundsTitle"]');
  const woundsCheckboxes = document.querySelectorAll(
    'input[name="woundsRequest"]'
  );

  attachListenersToCheckboxes();

  basicToggle.addEventListener("change", (event) => {
    toggleSection(basicToggle, basicExpand, basicCheckboxes);
  });

  cleaningToggle.addEventListener("change", (event) => {
    toggleSection(cleaningToggle, cleaningExpand, cleaningCheckboxes);
  });

  equipmentToggle.addEventListener("change", (event) => {
    toggleSection(equipmentToggle, equipmentExpand, equipmentCheckboxes);
  });

  injectologyToggle.addEventListener("change", (event) => {
    toggleSection(injectologyToggle, injectologyExpand, injectologyCheckboxes);
  });

  medicineToggle.addEventListener("change", (event) => {
    toggleSection(medicineToggle, medicineExpand, medicineCheckboxes);
  });

  solutionsToggle.addEventListener("change", (event) => {
    toggleSection(solutionsToggle, solutionsExpand, solutionsCheckboxes);
  });

  woundsToggle.addEventListener("change", (event) => {
    toggleSection(woundsToggle, woundsExpand, woundsCheckboxes);
  });

  function toggleSection(toggle, expand, checkboxes) {
    expand.checked = true;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = toggle.checked;
    });
  }

  function verifySection(sectionToggle, sectionCheckboxes) {
    let allChecked = true;

    sectionCheckboxes.forEach((checkbox) => {
      if (!checkbox.checked) allChecked = false;
    });

    sectionToggle.checked = allChecked;
  } //closes toggleCheckbox method

  function attachListenersToCheckboxes() {
    basicCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(basicToggle, basicCheckboxes);
      });
    });

    cleaningCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(cleaningToggle, cleaningCheckboxes);
      });
    });


    equipmentCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(equipmentToggle, equipmentCheckboxes);
      });
    });

    injectologyCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(injectologyToggle, injectologyCheckboxes);
      });
    });

    medicineCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(medicineToggle, medicineCheckboxes);
      });
    });

    solutionsCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(solutionsToggle, solutionsCheckboxes);
      });
    });

    woundsCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        verifySection(woundsToggle, woundsCheckboxes);
      });
    });
  } //closes attachListeners function
}
