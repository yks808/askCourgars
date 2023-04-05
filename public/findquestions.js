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

    const questionsContainer = document.getElementById('myQuestionContainer');
    for (const [i, question] of questions.entries()) {
        const newCard = document.createElement('div');
        const innerHTML =
            `<div class="card mb-4">
            <div class="card-body">
                <div class="d-flex flex-row user-info">
                    <div class="d-flex flex-column justify-content-start">
                        <span class="d-block font-weight-bold names">@ ` + question.username + `</span>
                        <span class="date text-black-50">` + question.date + `</span>
                    </div>
                </div>
            <div class="mt-2">
                <h5>` + question.title + `</h5>
                <p>` + question.question + `</p>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="like p-2 cursor"><i class="bi bi-reply"></i>
                    <span class="ml-1" onclick="test()">Chat</span></div>
                </div>
            </div>
            </div>
        </div>`
        newCard.innerHTML = innerHTML;
        questionsContainer.appendChild(newCard);
    }
}

loadQuestions();


function test() {
    window.location.href = "chat.html";

}
//class Ask {

    //constructor() {

        // const postTitleEl = document.querySelector('.post-title');
        // postTitleEl.textContent = this.getQuestionTitle();

        // const postMainEl = document.querySelector('.post-main');
        // postMainEl.textContent = this.getQuestionMain();

        // const postNameEl = document.querySelector('.post-name');
        // postNameEl.textContent = this.getPostName();

        // const dateEl = document.querySelector('.post-date');
        // dateEl.textContent = this.getDate();

        // let infoToIn = [];
        // infoToIn = { name: postNameEl, date: dateEl, title: postTitleEl, main: postMainEl };
        // localStorage.setItem('userInfo', JSON.stringify(info));
        // //add all the input from a user as an array in localstorage

        // let infoToOut = [];
        // const infoToOutText = localStorage.getItem('userInfo');
        // if (infoToOutText) {
        //     infoToOut = JSON.parse(infoToOutText);
        // }

    //}

    // getQuestionTitle() {
    //     return localStorage.getItem('questionTitle') ?? 'No post(title) has made yet';
    // }

    // getQuestionMain() {
    //     return localStorage.getItem('questionMain') ?? 'No post(main) has made yet';
    // }

    //] getPostName() {
    //     return localStorage.getItem('userName') ?? 'No post(name) has made yet';
    // }

    // getDate() {
    //     return new Date().toLocaleDateString();
    // }

//}

//const ask = new Ask();
