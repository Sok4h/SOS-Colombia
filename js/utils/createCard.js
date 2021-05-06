const createCard = (type, data, elementType, id) => {
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

  if (type == "dark") {
    card.classList.add("card--dark");
  } else if (type == "white") {
    card.classList.add("card--white");
  }

  if(id != null) {
    const btnDeleted = document.createElement("button");
    const textDeleted = document.createElement("p");
    btnDeleted.innerHTML ="Terminar solicitud";
    btnDeleted.classList.add("btn--white");
    textDeleted.innerHTML ="Terminarás tu solicitud de insumos";

    card.appendChild(btnDeleted);
    card.appendChild(textDeleted);
  }

  return card;
};
