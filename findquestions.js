
class Ask {

    constructor() {

        const postTitleEl = document.querySelector('.post-title');
        postTitleEl.textContent = this.getQuestionTitle();

        const postMainEl = document.querySelector('.post-main');
        postMainEl.textContent = this.getQuestionMain();

        const postNameEl = document.querySelector('.post-name');
        postNameEl.textContent = this.getPostName();


    }


    getQuestionTitle() {
        return localStorage.getItem('questionTitle') ?? 'No post(title) has made yet';
    }

    getQuestionMain() {
        return localStorage.getItem('questionMain') ?? 'No post(main) has made yet';
    }

    getPostName() {
        return localStorage.getItem('userName') ?? 'No post(name) has made yet';
    }

}

const ask = new Ask();