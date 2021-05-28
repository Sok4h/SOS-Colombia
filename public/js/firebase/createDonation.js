window.addEventListener("load", () =>{

    const createDonateNequiBtn = document.getElementById("create-donationNequi-btn");
    const createDonateVakiBtn = document.getElementById("create-donationVaki-btn");

    function createDonation( url){
        
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
            location.href = url;
        });
    }
    createDonateNequiBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        createDonation("https://recarga.nequi.com.co/bdigitalpsl/#!/") 
    } );

    createDonateVakiBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        createDonation("https://vaki.co/tt7dzhY9mKhM2z9tfGJu?utm_source=whatsapp") 
    } );
});