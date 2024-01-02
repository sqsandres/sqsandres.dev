function fnAddScript(src, callback) {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.onload = callback;
    document.body.appendChild(script);
}

function fnSetContainerContent(content) {
    let container = document.getElementById(containerId);
    if (!container) {
        return;
    }
    container.innerHTML = content;
}
function fnCreateElement(attributes) {
    let element = document.createElement(attributes.type);
    if(attributes.classes){
        element.classList.add(...attributes.classes);
    }
    if (attributes.i18nId) {
        element.setAttribute('data-i18n', attributes.i18nId);
    }
    if (attributes.text) {
        element.appendChild(document.createTextNode(attributes.text));
    }
    return element;
}
function fnCreateLink(attributes) {
    attributes.type = 'a';
    let element = fnCreateElement(attributes);
    element.setAttribute('href', attributes.url);
    element.setAttribute('target', '_blank');
    element.setAttribute('rel', 'noopener');
    return element;
}
function fnCreateImg(attributes) {
    attributes.type = 'img';
    let element = fnCreateElement(attributes);
    element.setAttribute('src', attributes.url);
    element.setAttribute('alt', attributes.alt);
    return element;
}
function fnMakeUL(content) {
    let ulList = document.createElement('ul');
    ulList.classList.add('list-group','list-group-flush');
    if(typeof content === 'object'){
        content.forEach(function (item) {
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.appendChild(document.createTextNode(item));
            ulList.appendChild(li);
        });
    }else{
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.appendChild(document.createTextNode(content));
        ulList.appendChild(li);
    }
    return ulList;
}