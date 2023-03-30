
class Name {

    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Please log in';
    }

    async pressButton(button) {

        saveScore(this.sequence.length - 1);

    }

    saveScore(score) {
        const userName = this.getPlayerName();
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
        scores = this.updateScores(userName, score, scores);

        localStorage.setItem('scores', JSON.stringify(scores));
    }

    updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };
        scores.push(newScore);
        return scores;
    }


}

const name = new Name();

function post() {

    const titleEl = document.querySelector("#title");
    localStorage.setItem("questionTitle", titleEl.value);

    const mainEl = document.querySelector("#form-comment");
    localStorage.setItem("questionMain", mainEl.value);

    window.location.href = "findquestions.html";
}