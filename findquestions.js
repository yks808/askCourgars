
class Ask {

    constructor() {
        const titleNameEl = document.querySelector('.title-name');
        titleNameEl.textContent = this.getTitleName();
    }
    getTitleName() {
        return localStorage.getItem('questionTitle') ?? 'Please post your questions';
    }

}

const ask = new Ask();