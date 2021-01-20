const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);
    if(txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if(attr){
        element.setAttribute(attr, value);
    }
    document.querySelector('.content').appendChild(element);
}

const searchElements = (event, nameElement) => {
    event.preventDefault(); //nie odswieża się strona po submicie formularza
    const infoElement = document.querySelector('.result');
    infoElement.textContent = ''; //czyszczenie wyniku, aby niebralo pod uwagę divów
    const elements = document.querySelectorAll(nameElement);
    console.log(elements);

    if(elements.length) {
        infoElement.innerHTML = `<p class="result__number-info"> W tym dokumencie znaleziono <strong> ${elements.length} </strong> elementów <strong> ${nameElement} </strong></p>`
        showInfo(elements, infoElement)
    } else {
        infoElement.innerHTML = `<p class="result__number-info"> W tym dokumencie nie znaleziono elementów <strong> ${nameElement} </strong></p>`
        return;
    }
}

const showInfo = (elements, infoElement) => {
    console.log(elements, infoElement)
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>Klasy: ${element.className}</div>
        <div>Wysokość: ${element.offsetHeight}</div>
        <div>Szerokość: ${element.offsetWidth}</div>
        <div>Liczba dzieci: ${element.childElementCount}</div>
        `;
        infoElement.appendChild(item);
    })
};

const addForm = document.querySelector('.form--add');

addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,

    ))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));