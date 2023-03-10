
class Ask {

    constructor() {
        const postTitleEl = document.querySelector('.post-title');
        postTitleEl.textContent = this.getQuestionTitle();
    }
    getQuestionTitle() {
        return localStorage.getItem('questionTitle') ?? 'No post has made yet';
    }

}

const ask = new Ask();