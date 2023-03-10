
class Ask {

    constructor() {
        const titleNameEl = document.querySelector('.title-name');
        titleNameEl.textContent = this.getTitlePost();
    }
    getTitlePost() {
        return localStorage.getItem('titlePost') ?? 'Title:';
    }


}

const ask = new Ask();