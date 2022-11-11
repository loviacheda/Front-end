document.querySelector('.download-info').addEventListener('click', async (evt) => {
    evt.target.disabled = true;

    const {imageLink, cell, country,email, coordinates} = await getRandomPerson();
    let infoCard = document.createElement('div');
    infoCard.classList.add('infoCard');
    infoCard.innerHTML = `
    <img class="infoCard-image" src="${imageLink}" alt="card-image">
    <p class="infoCard-entry">Cell:&nbsp;<span>${cell}</span></p>
    <p class="infoCard-entry">Country:&nbsp;<span>${country}</span></p>
    <p class="infoCard-entry">Email:&nbsp;<span>${email}</span></p>
    <p class="infoCard-entry">Coordinates:&nbsp;<span>${coordinates}</span></p>
  `
    document.querySelector('.info').append(infoCard);

    evt.target.disabled = false;
});

async function getRandomPerson() {
    const response = await fetch('https://randomuser.me/api/');
    const {results: [person]} = await response.json();
    return {
        imageLink: person.picture.large,
        cell: ` ${person.cell}`,
        country: person.location.country,
        email: person.email,
        coordinates: `${person.location.coordinates.latitude} ${person.location.coordinates.longitude}`,
    };
}