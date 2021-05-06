const createCheckbox = (label, name, value, id, index, elementTag) => {
    const checkbox = document.createElement(elementTag);
    checkbox.classList.add('checkbox');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', name);
    input.setAttribute('id', `${id}${index}`);
    input.value = value;
    input.classList.add('checkbox__input');
    checkbox.appendChild(input);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', `${id}${index}`);
    checkboxLabel.classList.add('checkbox__label');
    checkboxLabel.innerText = label;
    checkbox.appendChild(checkboxLabel);

    return checkbox;
}