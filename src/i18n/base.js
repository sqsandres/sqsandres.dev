let lang = {
    current: 'en',
    dictionary: [],
    errormsg: 'I am sorry that you are having problems with the website, I hope to solve it soon.',
    setDictionary: function (key, setOfValues) {
        this.dictionary[key] = setOfValues;
        this.translate();
    },
    setLang: function (lang) {
        lang = (lang ?? '').length > 2 ? lang.substring(0, 2) : lang;
        this.current = lang === 'en' || lang === 'es' ? lang : 'en';
        if (this.dictionary[this.current]) {
            this.translate();
        } else {
            fnAddScript('./i18n/base-' + this.current + '.js?v=' + version, this.translate);
        }
    },
    translate: function () {
        let elements = document.querySelectorAll('[data-i18n]');
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let key = element.getAttribute('data-i18n');
            let text = lang.dictionary[lang.current][key];
            element.innerHTML = text ?? element.innerHTML;
        }
    },
    getValue: function (key, defaultValue) {
        if (!this.dictionary[this.current] || !this.dictionary[this.current][key]) {
            return defaultValue ?? key;
        }
        return this.dictionary[this.current][key] ?? defaultValue;
    }
};