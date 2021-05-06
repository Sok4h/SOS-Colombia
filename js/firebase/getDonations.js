window.addEventListener('load', () => {
    const donationsContainer = document.querySelector('.donations__wrapper');

    db.collection('money_donation_info').get()
    .then(donations => {
        donations.forEach(donation => {
            let list = [];
            donation.data().accounts.forEach(item => {
                let json = JSON.parse(item);

                list.push({
                    title: json.name,
                    text: json.number
                });
            });
            const donationData = {
                title: donation.data().name,
                list
            }
            
            const card = createCard('white', donationData);
            donationsContainer.appendChild(card);
        });
    })
});