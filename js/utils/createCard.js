const createCard = (type, data, elementType, button) => {
  let card;
  if (elementType) {
    card = document.createElement(elementType);
  } else {
    card = document.createElement("article");
  }

  card.classList.add("card");

  const header = document.createElement("header");
  card.appendChild(header);
  header.classList.add("card__header");

  const titleWrapper = document.createElement("div");
  header.appendChild(titleWrapper);

  const title = document.createElement("h3");
  title.classList.add("card__title");
  titleWrapper.appendChild(title);
  title.innerText = data.title;

  if (data.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.classList.add("card__subtitle");
    titleWrapper.appendChild(subtitle);
    subtitle.innerText = data.subtitle;
  }

  if(data.time) {
    const time = document.createElement('p');
    time.classList.add('card__time');
    header.appendChild(time);
    time.innerHTML = data.time;
  }

  if (data.section) {
    const sectionText = document.createElement("p");
    sectionText.classList.add("card__section");
    sectionText.innerText = data.section;
    card.appendChild(sectionText);
  }
  if (data.list) {
    const list = document.createElement("ul");
    list.classList.add("card__list");
    card.appendChild(list);
    data.list.forEach((element) => {
      const item = document.createElement("li");
      item.classList.add("card__listItem");
      list.appendChild(item);
      let json ;
      if (element.charAt(0) == "{")  json = JSON.parse(element);

      if (typeof json == "object") {
        item.innerHTML = `<b> ${json.name} </b> <br> ${json.number}`;
      } else {
        item.innerText = element;
      }
    });
  }

  if(button) {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("flex-center", "flex-column");
    card.appendChild(buttonContainer);

    const btn = document.createElement("button");
    btn.classList.add('btn', 'btn--white');
    btn.innerHTML = button.text;
    btn.addEventListener('click', button.callback);
    buttonContainer.appendChild(btn);

    if(button.message) {
      const btnMsg = document.createElement('p');
      btnMsg.innerText = button.message;
      buttonContainer.appendChild(btnMsg);
    }
  }

  if (type == "dark") {
    card.classList.add("card--dark");
  } else if (type == "white") {
    card.classList.add("card--white");
  }

  return card;
};
