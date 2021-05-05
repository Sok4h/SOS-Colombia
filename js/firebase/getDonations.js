window.addEventListener('load', () => {
    const donationsContainer = document.querySelector('.donations__wrapper');

    db.collection('money_donation_info').get()
    .then(donations => {
        donations.forEach(donation => {
            const donationData = {
                title: donation.data().name,
                list: donation.data().accounts
            }

            const card = createCard('white', donationData);
            donationsContainer.appendChild(card);
        });
    })
});