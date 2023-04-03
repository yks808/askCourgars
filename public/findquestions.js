
async function loadQuestions() {
    console.log("loadquestion is called");

    let questions = [];
    const response = await fetch('api/post');
    console.log("coming back as", response);
    questions = await response.json();

    console.log("final", questions);

    displayQuestions(questions);
}

function displayQuestions(questions) {
    const tableBodyEl = document.querySelector('#questionsTable');

    if (questions.length) {
        // Update the DOM with the scores
        for (const [i, post] of questions.entries()) {
            const usernameTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');
            const titleTdEl = document.createElement('td');
            const questionTdEl = document.createElement('td');

            usernameTdEl.textContent = post.username;
            dateTdEl.textContent = post.date;
            titleTdEl.textContent = post.title;
            questionTdEl.textContent = post.question;


            const rowEl = document.createElement('tr');
            rowEl.appendChild(usernameTdEl);
            rowEl.appendChild(dateTdEl);
            rowEl.appendChild(titleTdEl);
            rowEl.appendChild(questionTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to</td></tr>';
    }
}

loadQuestions();

class Ask {

    constructor() {

        const postTitleEl = document.querySelector('.post-title');
        postTitleEl.textContent = this.getQuestionTitle();

        const postMainEl = document.querySelector('.post-main');
        postMainEl.textContent = this.getQuestionMain();

        const postNameEl = document.querySelector('.post-name');
        postNameEl.textContent = this.getPostName();

        const dateEl = document.querySelector('.post-date');
        dateEl.textContent = this.getDate();

        let infoToIn = [];
        infoToIn = { name: postNameEl, date: dateEl, title: postTitleEl, main: postMainEl };
        localStorage.setItem('userInfo', JSON.stringify(info));
        //add all the input from a user as an array in localstorage

        let infoToOut = [];
        const infoToOutText = localStorage.getItem('userInfo');
        if (infoToOutText) {
            infoToOut = JSON.parse(infoToOutText);
        }
        //need to work on it later of the project to maek it work

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

    getDate() {
        return new Date().toLocaleDateString();
    }

}

const ask = new Ask();
