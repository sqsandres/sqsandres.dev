/*
 * If you are reading this, you may think that everything in this section could be done with third-party 
 * libraries and HTML, but part of this being my page is that you can see how I write code, the love I put 
 * into it and that I can use all the languages and use libraries when necessary (it is essential to reuse 
 * code from others). For Ajax requests, I looked for a lightweight library and used Bootstrap, 
 * but I didn't stop at that; I customized the styles and created these functions.
*/
const yearElement = document.getElementById('year');
yearElement.innerHTML = (new Date(new Date() - new Date('2003-06-01')).getFullYear() - 1970);
const containerId = 'container';
const version = '0.0.1';

let SectionRender = function () {
    this.renderer = {};
};
SectionRender.prototype = {
    setStrategy: function (renderer) {
        this.renderer = renderer;
    },
    render: function (sectionData) {
        return this.renderer.render(sectionData);
    }
}
function SkillsRender() {
    this.render = function (sectionData) {
        let container = document.getElementById(containerId);
        let divContainer = fnCreateElement({type:'div', classes:['card', 'text-bg-light', 'mt-3']});
        let divSubContainer = fnCreateElement({type:'div', classes:['row', 'g-0']});
        let divCard = fnCreateElement({type:'div', classes:['card-body']});
        let h5Title = fnCreateElement({type:'h5', classes:['card-title'], i18nId:`s${sectionData.id}t`, text:sectionData.title});
        let pDescription = fnCreateElement({type:'p', classes:['card-text'], i18nId:`s${sectionData.id}c`});
        container.appendChild(divContainer);
        divContainer.appendChild(divSubContainer);
        divSubContainer.appendChild(divCard);
        divCard.appendChild(h5Title);
        divCard.appendChild(pDescription);
        this.fnCreateDetailElements(divCard, sectionData.layers, sectionData.id);
    }
    this.fnCreateDetailElements = function (container, layersData, sectionId) {
        let ulContainer = fnCreateElement({type:'ul', classes:['list-group', 'list-group-flush']});
        container.appendChild(ulContainer);
        for (let i = 0; i < layersData.length; i++) {
            let liList = fnCreateElement({type:'li', classes:['list-group-item']});
            ulContainer.appendChild(liList);
            let layer = layersData[i];
            for (let j = 0; j < layer.items.length; j++) {
                let item = layer.items[j];
                let spamItemContainer = fnCreateElement({type:'span', classes:['d-inline-block']});
                let img = fnCreateImg({classes:['concept'], alt:item.name, url:'/img/svg/' + item.icon});
                spamItemContainer.appendChild(img);
                liList.appendChild(spamItemContainer);
                this.fnCreateToolTip(spamItemContainer, item, sectionId, layer.id);
            }
            let nameSpan = fnCreateElement({type:'span', classes:['layer-name'], i18nId:`s${sectionId}-l${layer.id}t`, text:layer.name});
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
}
function ProjectsRender() {
    this.render = function (projectData) {
        let container = document.getElementById(containerId);
        let divContainer = fnCreateElement({type:'div', classes:['card', 'text-bg-light', 'mt-3']});
        let divSubContainer = fnCreateElement({type:'div', classes:['row', 'g-0']});
        let divCard = fnCreateElement({type:'div', classes:['card-body']});
        let h5Title = fnCreateElement({type:'h5',classes: ['card-title'], i18nId:`p${projectData.id}t`, text:projectData.title});
        let pDescription = fnCreateElement({type:'p',classes: ['card-text'], i18nId:`p${projectData.id}c`});
        container.appendChild(divContainer);
        divContainer.appendChild(divSubContainer);
        divSubContainer.appendChild(divCard);
        divCard.appendChild(h5Title);
        divCard.appendChild(pDescription);
        this.fnCreateDetailElements(divCard, projectData.layers, projectData.id);
    }
    this.fnCreateDetailElements = function (container, layersData, sectionId) {
        let cardContainer = fnCreateElement({type:'div', classes:['card-group']});
        container.appendChild(cardContainer);
        for (let i = 0; i < layersData.length; i++) {
            let card = fnCreateElement({type:'div', classes:['card']});
            cardContainer.appendChild(card);
            let project = layersData[i];

            let img = fnCreateImg({classes:['card-img-top','-project-icon'], alt:project.name, url:'/img/projects/' + project.iconSite});
            card.appendChild(img);
            
            let body = fnCreateElement({type:'div', classes:['card-body']});
            let title = fnCreateElement({type:'h5', classes:['card-title'], i18nId:`p${sectionId}-i${project.id}t`});
            let text = fnCreateElement({type:'p',classes: ['card-text'], i18nId:`p${sectionId}-i${project.id}c`});
            card.appendChild(body);
            body.appendChild(title);
            body.appendChild(text);
            if(project.site){
                let openSiteContainer = fnCreateElement({type:'p', classes:['card-text']});
                let openSitelink = fnCreateLink({classes: ['link-success','link-offset-2','link-underline-opacity-25','link-underline-opacity-100-hover'], i18nId:'SeeSite', url:project.site});
                body.appendChild(openSiteContainer);
                openSiteContainer.appendChild(openSitelink);
            }
            let footer = fnCreateElement({type:'div', classes:['card-footer']});
            let linkToCode = fnCreateLink({classes:['link-success','link-offset-2','link-underline-opacity-25','link-underline-opacity-100-hover'], i18nId:'SeeCode', url:project.code});
            card.appendChild(footer);
            footer.appendChild(linkToCode);
        }
    }
}

((function init() {
    document.getElementById('langEnglish').addEventListener('click', function (event) { lang.setLang('en'); if(event)event.preventDefault(); });
    document.getElementById('langSpanish').addEventListener('click', function (event) { lang.setLang('es'); if(event)event.preventDefault(); });

    let ajax = new sack();
    ajax.requestFile = "./json/sections.json?v=" + version;
    ajax.method = 'GET';
    ajax.onLoading = function () {
        let element = document.getElementById("spinner"); if (!element) return;
        element.style.display = "";
    };
    ajax.onLoaded = function () {
        let element = document.getElementById("spinner"); if (!element) return;
        element.style.display = "none";
        lang.setLang(navigator.language || navigator.userLanguage);
    };
    ajax.onCompletion = function () {
        if (!ajax.responseStatus || !ajax.responseStatus.length || ajax.responseStatus[0] !== 200) {
            let container = document.getElementById(containerId);
            container.innerHTML = lang.errormsg;
        } else {
            let sections = JSON.parse(ajax.response);
            if (!sections || !sections.length) {
                return;
            }
            let renders = {};
            renders['skills'] = new SkillsRender();
            renders['projects'] = new ProjectsRender();
            let renderer = new SectionRender();
            sections.forEach(function (section) {
                strategy = renders[section.type];
                if (strategy) {
                    renderer.setStrategy(strategy);
                    renderer.render(section);
                }
            });
        }
        lang.setLang(navigator.language || navigator.userLanguage);
    };
    ajax.runAJAX();
})());

