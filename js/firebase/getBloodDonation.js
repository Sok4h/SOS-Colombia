const getBloodDonations = () => {
    const bloodDonationSection = document.querySelector('.blood-donation-section');

    db.collection('blood-donations').get()
    .then(result => {
        result.forEach(data => {

            const card = createCard('white', data.data());
            bloodDonationSection.appendChild(card);
        });
    })
}
