window.addEventListener("load", () =>{

    const createDonateBtn = document.getElementById("create-donate-btn");

    createDonateBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        let json ={
            info: [],
        }

        const nameInput = document.querySelector('input[name="nombreDonante"]');
        const lastNameInput = document.querySelector('input[name="apellidoDonante"]');
        const enterpriseInput = document.querySelector('input[name="enterpriseDonante"]');
        const emailInput = document.querySelector('input[name="emailDonante"]');
        const donationInput = document.querySelector('input[name="moneyDonante"]');
        const authDonationCheckbox = document.querySelector('input[name="authDonantePublic"');
        const authEnterpriseCheckbox = document.querySelector('input[name="authEnterprisePublic"]');

        json.info.push({
            name: nameInput.value,
            lastName : lastNameInput.value,
            enterprise : enterpriseInput.value,
            email : emailInput.value,
            donate : donationInput.value,
            authDonante : authDonationCheckbox.checked? true : false,
            authEnterprise : authEnterpriseCheckbox.checked? true : false,
        });

        db.collection("donation_uxpeaker")
        .doc()
        .set(json)
        .then(()=>{
            location.href = "https://recarga.nequi.com.co/bdigitalpsl/#!/";
        });
    });
});