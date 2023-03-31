function post() {

    const titleEl = document.querySelector("#title");
    localStorage.setItem("questionTitle", titleEl.value);

    const mainEl = document.querySelector("#form-comment");
    localStorage.setItem("questionMain", mainEl.value);


    //get all the date that want to get stored
    const userName = localStorage.getItem('userName');
    const title = document.querySelector('#title')?.value;
    const userQuestion = document.querySelector('#form-comment')?.value;
    const date = new Date().toLocaleDateString();

    // try {
    //     const response = fetch('/api/createq', {
    //         method: 'POST',
    //         body: JSON.stringify({ name: userName, title: title, userQuestion: userQuestion, date: date }),
    //         headers: { 'content-type': 'application/json' },
    //     });
    //     const body = response.json();
    // } catch {
    //     console.log("saving new info was failed")
    // }


    window.location.href = "findquestions.html";
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