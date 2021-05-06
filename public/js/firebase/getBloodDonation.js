const getBloodDonations = () => {
    const bloodDonationSection = document.querySelector('.blood-donation-wrapper');

    bloodDonationSection.innerHTML = "";

    db.collection('blood-donations').get()
    .then(result => {
        result.forEach(data => {
            const card = createCard('white', data.data());
            bloodDonationSection.appendChild(card);
        });
    })
}
