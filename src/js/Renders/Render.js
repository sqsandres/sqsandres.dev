import { SkillsRender } from './SkillsRender.js';
import { ProjectsRender } from './ProjectsRender.js';

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
function fnRender(section){
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