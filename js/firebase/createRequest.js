window.addEventListener('load', () => {
    const createRequestBtn = document.getElementById('finish-request-creation-btn');
    const placeSelect = document.getElementById('punto');

    createRequestBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let json = {};
        if(placeSelect.value) {
            const basicCheckboxes =  document.querySelectorAll('input[name="basicRequest"]:checked');
            const equipmentCheckboxes =  document.querySelectorAll('input[name="equipmentRequest"]:checked');
            const injectologyCheckboxes =  document.querySelectorAll('input[name="injectologyRequest"]:checked');
            const medicineCheckboxes =  document.querySelectorAll('input[name="medicineRequest"]:checked');
            const solutionsCheckboxes =  document.querySelectorAll('input[name="solutionsRequest"]:checked');
            const woundsCheckboxes =  document.querySelectorAll('input[name="woundsRequest"]:checked');
        
            firebase.auth().onAuthStateChanged(user => {
                json.user = user.email.split('@')[0].toUpperCase();
                console.log(json);
                navigateBetweenScreens(createRequestScreen, requestCreatedScreen);
            });         
        }
        
        window.alert('Elige un punto de la lista');
    });
});