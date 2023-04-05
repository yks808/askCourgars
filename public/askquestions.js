async function post() {

    //console.log("post method called");
    const titleEl = document.querySelector("#title");
    localStorage.setItem("questionTitle", titleEl.value);

    const mainEl = document.querySelector("#form-comment");
    localStorage.setItem("questionMain", mainEl.value);


    //get all the date that want to get stored
    const userName = localStorage.getItem('userName');
    const title = document.querySelector('#title')?.value;
    const userQuestion = document.querySelector('#form-comment')?.value;
    const date = new Date().toLocaleDateString();
    window.location.href = "findquestions.html";

    // const response = await fetch('api/question/create');
    // console.log(response.ok);
    // console.log(response.status);
    // const questions = await response.json();
    // return questions;

    const body = ({ userName: userName, title: title, userQuestion: userQuestion, date: date });
    //onsole.log(body);
    const response = await fetch('api/question/create', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
    });
    // const json = await response.json();
    // console.log(json);
}

class Name {

    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Please log in';
    }
}

const name = new Name();