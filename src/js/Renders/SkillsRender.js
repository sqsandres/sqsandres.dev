
function SkillsRender() {
    this.render = function (sectionData) {
        let container = document.getElementById(containerId);
        let divContainer = fnCreateElement('div', ['card', 'text-bg-light', 'mt-3']);
        let divSubContainer = fnCreateElement('div', ['row', 'g-0']);
        let divCard = fnCreateElement('div', ['card-body']);
        let h5Title = fnCreateElement('h5', ['card-title'], `s${sectionData.id}t`, sectionData.title);
        let pDescription = fnCreateElement('p', ['card-text'], `s${sectionData.id}c`, '');
        container.appendChild(divContainer);
        divContainer.appendChild(divSubContainer);
        divSubContainer.appendChild(divCard);
        divCard.appendChild(h5Title);
        divCard.appendChild(pDescription);
        this.fnCreateDetailElements(divCard, sectionData.layers, sectionData.id);
    }
    this.fnCreateDetailElements = function (container, layersData, sectionId) {
        let ulContainer = fnCreateElement('ul', ['list-group', 'list-group-flush']);
        container.appendChild(ulContainer);
        for (let i = 0; i < layersData.length; i++) {
            let liList = fnCreateElement('li', ['list-group-item']);
            ulContainer.appendChild(liList);
            let layer = layersData[i];
            for (let j = 0; j < layer.items.length; j++) {
                let item = layer.items[j];
                let spamItemContainer = fnCreateElement('span', ['d-inline-block']);
                let img = fnCreateElement('img', ['concept']);
                img.setAttribute('src', '/img/svg/' + item.icon);
                img.setAttribute('alt', item.name);
                spamItemContainer.appendChild(img);
                liList.appendChild(spamItemContainer);
                this.fnCreateToolTip(spamItemContainer, item, sectionId, layer.id);
            }
            let nameSpan = fnCreateElement('span', ['layer-name'], `s${sectionId}-l${layer.id}t`, layer.name);
            liList.appendChild(nameSpan);
        }
    }
    this.fnCreateToolTip = function (element, item, sectionId, layerId) {
        new bootstrap.Popover(element, {
            content: function () {
                let content = lang.getValue(`s${sectionId}-l${layerId}-i${item.id}d`, '');
                let ulList = fnMakeUL(content);
                let li = document.createElement('li');
                li.classList.add('list-group-item', 'list-group-item-dark');
                let span = document.createElement('span');
                span.classList.add('text-bold');
                span.appendChild(document.createTextNode(lang.getValue('Experience') + ': ' + item.years + ' ' + (item.years == 1 ? lang.getValue('Year') : lang.getValue('Years'))));
                li.appendChild(span);
                ulList.appendChild(li);
                return ulList;
            },
            html: true,
            placement: 'bottom',
            title: function () { return lang.getValue(`s${sectionId}-l${layerId}-i${item.id}t`, item.name); },
            trigger: 'hover focus'
        });
    }
    this.fnMakeUL = function (content, experience) {
        let ulList = document.createElement('ul');
        ulList.classList.add('list-group', 'list-group-flush');
        if (typeof content === 'object') {
            content.forEach(function (item) {
                let li = document.createElement('li');
                li.classList.add('list-group-item');
                li.appendChild(document.createTextNode(item));
                ulList.appendChild(li);
            });
        } else {
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.appendChild(document.createTextNode(content));
            ulList.appendChild(li);
        }
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-dark');
        let span = document.createElement('span');
        span.classList.add('text-bold');
        span.appendChild(document.createTextNode(lang.getValue('Experience') + ': ' + experience + ' ' + (experience == 1 ? lang.getValue('Year') : lang.getValue('Years'))));
        li.appendChild(span);
        ulList.appendChild(li);
        return ulList;
    }
}
export default {SkillsRender};