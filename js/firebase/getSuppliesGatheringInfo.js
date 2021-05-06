window.addEventListener('load', () => {
    const suppliesEastContainer = document.getElementById('suppliesInfo-east');

    db.collection('supplies_gathering_info').get()
    .then(suppliesGathering => {
        suppliesGathering.forEach(supplieGathering => {
            console.log(supplieGathering.data().name);
            const supplieGatheringData = {
                title: supplieGathering.data().name,
                subtitle: supplieGathering.data().address,
                //list: supplieGathering.data().phone
            }

            const card = createCard('dark', supplieGatheringData);
            suppliesEastContainer.appendChild(card);
        });
    })
});